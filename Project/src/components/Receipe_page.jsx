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
    const [showskelton,setShowskelton] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowskelton(false)
        }, 2000)
    }, [])
    
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`https://naturals-emart-project.onrender.com/api/generate-recipe`, {
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
            
            .replace(/<b>(.*?)<\/b>/g, '<b class="">$1</b>')
            .replace(/<i>(.*?)<\/i>/g, '<i class="">$1</i>');
            
        return parse(modifiedHtml);
    };

    return (
        <div>


            <Navbar />
            <div className="container mx-auto px-4 py-20 w-[80%]">
                {recipe ? (
                    <div className="flex flex-col md:flex-row border rounded-lg shadow-lg overflow-hidden">
                        <div className='py-3 p-3 bg-slate-100 w-full md:w-[40%]'>
                        <img src={image_setup} alt={recipe.title} className="w-full md:w-full h-80 object-cover rounded-2xl shadow-lg" />
                        </div>
                        <div className="p-6 md:w-2/3 recipe-content">
                            <h1 className="text-3xl font-bold">{title}</h1>
                            <div className="text-lg mb-4 text-justify text-gray-500">
                                {modifyHtmlContent(recipe.content)}
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                    <div className="flex flex-col w-[90%] gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-80 rounded-2xl sm:flex-row ">
                    <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse">
                    </div>
                    <div className="flex flex-col flex-1 gap-5 sm:p-2">
                        <div className="flex flex-col flex-1 gap-3">
                            <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl">
                            </div>
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                            </div>
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                            </div>
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                            </div>
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                            </div>
                        </div>
                        <div className="flex gap-3 mt-auto">
                            <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse">
                            </div>
                            <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse">
                            </div>
                            <div className  ="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse">
                            </div>
                        </div>
                    </div>
                </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default RecipePage;
