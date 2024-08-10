import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

const port = 3000;
let generatedText = '';

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "Write a receive for bread omlette";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text().toString();
    
    // Replace '**text**' with '<b>text</b>'
    text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    // Remove single stars
    text = text.replace(/\*/g, '');

    // Split text into title and content
    const [title, ...contentParts] = text.split('\n');
    const content = contentParts.join('<br>');

    generatedText = {
        title: title,
        content: content.replace(/(?:\r\n|\r|\n)/g, '<br>')
    };

    console.log(generatedText);
}

run();

app.get('/', (req, res) => {
    res.send(`
        
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                .title {
                    font-weight: bold;
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                .card {
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    padding: 15px;
                    margin: 10px 0;
                    background-color: #f9f9f9;
                }
                .content {
                    font-weight: normal;
                }
            </style>
        </head>
        <body>
            <div class="title">${generatedText.title}</div>
            <div class="content">
                ${generatedText.content.split('<br>').map(line => `<div class="card">${line}</div>`).join('')}
            </div>
            <script>
                const text = "${generatedText.content}";
                console.log('jj', text); 
            </script>
        </body>
        </html>
    `);
});

app.get('/api/generated-text', async (req, res) => {
    try {
        await run();
        const contentArray = generatedText.content.split('<br>');
        res.json({ title: generatedText.title, content: contentArray });
    } catch (error) {
        console.error('Error generating text:', error);
        res.status(500).json({ error: 'Failed to generate text' });
    }
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
