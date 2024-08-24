import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

let generatedText = { title: '', content: '' };

app.post('/api/generate-recipe', async (req, res) => {
    try {
        const { title } = req.body;
        const prompt = `Write a recipe for ${title} in only in 4 points `;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text().toString();

        // Process and format the text
        text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\*/g, '');
        const [recipeTitle, ...contentParts] = text.split('\n');
        const content = contentParts.join('<br>');

        generatedText = {
            title: recipeTitle,
            content: content
        };


        res.json({
            title: recipeTitle,
            content: content.replace(/(?:\r\n|\r|\n)/g, '<br>')
        });
    } catch (error) {
        console.error('Error generating recipe:', error);
        res.status(500).json({ error: 'Failed to generate recipe' });
    }
});

app.get('/api/generated-text', (req, res) => {
    try {
        console.log('Fetching Generated Text:', generatedText); 

        if (!generatedText || !generatedText.title || !generatedText.content) {
            throw new Error('Generated text is not defined or empty');
        }

        const contentArray = generatedText.content.split('<br>');
        res.json({ title: generatedText.title, content: contentArray });
    } catch (error) {
        console.error('Error fetching generated text:', error);
        res.status(500).json({ error: 'Failed to generate text' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
