// src/pages/RecipePage.js
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import './styles/receipe.css';

function RecipePage() {
    const { title } = useParams();
    const [recipe, setRecipe] = useState(null);
    const image_setup = localStorage.getItem('image')
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/generate-recipe`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title }),
                });

                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [title]);

    const modifyHtmlContent = (html) => {
        const modifiedHtml = html
            .replace(/<b>(.*?)<\/b>/g, '<b class="bold-ingredient">$1</b>')
            .replace(/<i>(.*?)<\/i>/g, '<i class="italic-instruction">$1</i>'); // Example for other tags
        return parse(modifiedHtml);
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-20">
                {recipe ? (
                    <div className="flex flex-col md:flex-row border rounded-lg shadow-lg overflow-hidden">
                        <img src={image_setup} alt={recipe.title} className="w-full md:w-1/3 h-80 object-cover" />
                        <div className="p-6 md:w-2/3 recipe-content">
                            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
                            <div className="text-lg mb-4">
                                {modifyHtmlContent(recipe.content)}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default RecipePage;
