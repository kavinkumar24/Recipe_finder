// src/components/RecipeCard.js
import { useNavigate } from 'react-router-dom';
import { IoHeart, IoHeartOutline} from 'react-icons/io5';
function RecipeCard({ image, title, description, onClick }) {
    const navigate = useNavigate();

    const handleClick = () => {
        onClick();
       localStorage.setItem('image',image)
        navigate(`/recipe/${encodeURIComponent(title)}`);
    };

    return (
        <div className="bg-white shadow-xl rounded-lg overflow-hidden cursor-pointer w-[85%] hover:shadow" onClick={handleClick}>

            
            <div className='rounded-lg bg-zinc-100'>
            <img src={image} alt={title} className="w-full h-48 object-cover p-4 rounded-md" />
            </div>
            <div className="p-4">
               
                <h3 className="text-xl font-semibold">{title} 
                </h3>
                <div className='bg-black'>
                </div>
               
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
            <div className='-right-48 relative p-2 bg-slate-200 rounded-full'>
            <IoHeartOutline className='text-2xl' />
            </div>

        </div>
    );
}

export default RecipeCard;
