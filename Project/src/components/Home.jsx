import Navbar from "./Navbar";
import saladBg from "../assets/bg_img.jpg"; 
import salad from "../assets/Home_page_img1.jpg"; 
import { useEffect, useState } from "react";
import RecipeCard from "./Receipe_card";
import MasalaDosa from '../assets/masala_dosa.jpg'
import BreadOmlette from '../assets/Bread omlette.jpg'
import Tikka_Rice from '../assets/tikka_rice.jpg'
import Hyderabadi_biryani from '../assets/Hyderabadi_biryani.avif'

function Home() {
    const[theme,setTheme] = useState(
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    )
    useEffect(() => {
        localStorage.setItem('theme', theme);
      }, [theme]);
    const [recipes, setRecipes] = useState([
        {
            image: MasalaDosa, 
            title: "Masala Dosa",   
            description: "A tasty south indian receipe with rice flour and potato.",
            content: '', 
            isLoading: false 
        },
        {
            image: BreadOmlette, 
            title: "Bread omlette",   
            description: "A quick and easy breakfast recipe with bread and eggs.",
            content: '', 
            isLoading: false 
        },
        {
            image: Tikka_Rice, 
            title: "Ticka rice",   
            description: "A home made quick spicy chicken and ingredients  ",
            content: '', 
            isLoading: false 
        },
        {
            image: Hyderabadi_biryani, 
            title: "Hyderabadi biryani",   
            description: "South Indian dish with basmati rice,chicken, lemon",
            content: '', 
            isLoading: false 
        },
        {
            image: Hyderabadi_biryani, 
            title: "Chicken 65",   
            description: "a classic poultry dish with origins in Chennai, India. It consists of deep-fried chicken",
            content: '', 
            isLoading: false 
        },
        {
            image: Hyderabadi_biryani, 
            title: "Chicken 65",   
            description: "a classic poultry dish with origins in Chennai, India. It consists of deep-fried chicken",
            content: '', 
            isLoading: false 
        }
    ]);


    const fetchRecipe = async (title, index) => {
        try {
            setRecipes(prevRecipes => {
                const updatedRecipes = [...prevRecipes];
                updatedRecipes[index].isLoading = true;
                return updatedRecipes;
            });

            const response = await fetch(`http://localhost:3000/api/generate-recipe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Generated Recipe:', data);

            setRecipes(prevRecipes => {
                const updatedRecipes = [...prevRecipes];
                updatedRecipes[index] = {
                    ...updatedRecipes[index],
                    content: data.content, 
                    isLoading: false 
                };
                return updatedRecipes;
            });
        } catch (error) {
            console.error('Error generating recipe:', error);
            setRecipes(prevRecipes => {
                const updatedRecipes = [...prevRecipes];
                updatedRecipes[index].isLoading = false;
                return updatedRecipes;
            });
        }
    };

    return (
        <>
        <div className={`  md:min-h-screen lg:min-h-screen relative h-[40%] sm:h-12 lg:h-full shadow-md ${theme==='light'?'bg-white':'bg-slate-800'}`}>
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0 hidden md:block">
                <div
                    className="absolute right-[-60%] top-0 w-[150%] h-full"
                    style={{
                        backgroundImage: `url(${saladBg})`,
                        clipPath: "ellipse(70% 120% at 100% 50%)",
                        backgroundSize: "contain", 
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center", 
                    }}
                ></div>
            </div>

            {/* Navbar - Overlayed on top of the background */}
            <div className="relative z-10">
                <Navbar theme={theme} dark = {setTheme}/>
            </div>

            <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between ">
                {/* Left Side - Text and Order Details */}
                <div className="md:w-1/2 text-center md:text-left z-0">
                    <h1 className={`text-4xl md:text-6xl font-bold ${theme==='light'?'text-gray-900':'text-slate-400'}`}>
                        Find your <br /> favourite Foods receipe
                    </h1>
                    <p className="mt-4 text-gray-500 text-sm md:text-base">
                        Fresh and tasty food receipe you can use to aid your cooking
                    </p>
                    <div className="mt-6 text-xl font-semibold">
                        <span>Total receipes:</span>
                        <span className="text-yellow-600 ml-2">100</span>
                    </div>
                    <div className="mt-6 flex items-center justify-center md:justify-start space-x-4">
                        
                        <button className="bg-black text-white px-6 py-2 rounded-lg">
                            Get In
                        </button>
                    </div>
                </div>

                {/* Right Side - Salad Image */}
                <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center md:justify-end z-10 shadow-xl md:visible">
                    <img
                        src={salad}
                        alt="Salad"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-50 h-50 md:w-96 md:h-96 object-cover rounded-full z-10 shadow-xl" 
                    />
                </div>
            </div>
                    
        
        </div>
            {/* Recipe Cards */}
            <div className={`${theme==='light'?'bg-white':'bg-slate-800'}`}>
            <div className="px-20 text-3xl font-bold">
            <h1 className={`top-11 relative ${theme==='light'?'text-gray-600':'text-gray-400'}`}>Receipes:</h1>
            </div>
            <div className="grid grid-cols-1 mt-0 sm:grid-cols-2 lg:grid-cols-4 lg:grid-y-20 md:gap-2 gap-6 p-6 ml-10 sm:mt-16 lg:mt-10 ">
                {recipes.map((recipe, index) => (
                    <RecipeCard 
                        key={index}
                        image={recipe.image}
                        title={recipe.title}
                        description={recipe.description}
                        theme={theme}
                        onClick={() => fetchRecipe(recipe.title, index)}
                    />
                ))}
            </div>
            </div>
            </>
    );
}

export default Home;
