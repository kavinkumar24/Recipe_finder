import { useNavigate } from 'react-router-dom';
import { IoHeartOutline,IoHeart } from 'react-icons/io5';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function RecipeCard({ image, title, description, onClick,theme }) {
    const navigate = useNavigate();
    const[showoutline_heart,setShowoutline_heart] = useState(true);
    const[showheart,setShowheart] = useState(false);
    const [toast,setToast] = useState(false);
    const [liked_data, setLiked_data] = useState({
        name: '',
        desc: '',
    });
   
    useEffect(() => {
        localStorage.setItem('theme', theme);
      }, [theme]);

    const handleClick = () => {
        onClick();
        localStorage.setItem('image', image);
        localStorage.setItem('title', title);  
        navigate(`/recipe/${encodeURIComponent(title)}`);
    };

    const handle_wishlist = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const newLikedData = {
            name: title,
            desc: description,
            img: image,
        };

        setLiked_data(newLikedData);

        try {
            
            const data_send = await axios.post('https://recipe-finder-backend-pabt.onrender.com/wishlist', newLikedData);
            if (data_send.status === 200) {
                console.log("Success");
            }
        } catch (error) {
            console.log("Failed to add to wishlist", error);
        }
    };
    const handle_likes_ui = () =>{
        setToast(true);
        setShowoutline_heart(!showoutline_heart);
        setShowheart(!showheart);
        setTimeout(() => {
            setToast(false);
        },1000)
    }

    return (
        <div className=''>  

        {toast &&
        <div id="toast-success"
        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-md shadow-gray-100 dark:text-gray-400 top-2 right-5 z-50 fixed border-b border-slate-300"
        role="alert">
        <div
            className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white " data-dismiss-target="#toast-success" aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
    </div>
}
        <div className={`shadow-xl rounded-lg overflow-hidden cursor-pointer sm:w-[85%] md:w-[85%] lg:w-[85%] hover:shadow mb-10 w-[90%] ml-0 ${theme==='light'?'bg-white':'bg-slate-700'}`} onClick={handleClick}>
            <div className={`rounded-lg ${theme==='light'?'bg-zinc-100':'bg-gray-600'}`}>
                <img src={image} alt={title} className="w-full h-48 object-cover p-4 rounded-md" />
            </div>
            <div className="p-4">
                <h3 className={`text-xl font-semibold ${theme==='light'?'text-gray-600':'text-gray-100'}`}>{title}</h3>
                <p className={`mt-2 ${theme==='light'?'text-gray-600':'text-gray-400'}`}>{description}</p>
            </div>
            <div className={`-right-48 relative p-2 rounded-full hover:shadow-inner ${theme==='light'?'bg-slate-200 ':'bg-slate-900 '}`} onClick={handle_wishlist}>
                { showoutline_heart&&
                <IoHeartOutline className={`text-2xl ${theme==='light'?'text-black':'text-slate-400'}`} onClick={handle_likes_ui} />}
                {showheart &&
                <IoHeart className='text-2xl text-red-500' onClick={handle_likes_ui} />}
            </div>
            
        </div>
        
        
        </div>
    );
}

export default RecipeCard;
