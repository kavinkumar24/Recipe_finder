import { useNavigate } from 'react-router-dom';
import { IoHeartOutline } from 'react-icons/io5';
import { useState } from 'react';
import axios from 'axios';

function RecipeCard({ image, title, description, onClick }) {
    const navigate = useNavigate();
    const [liked_data, setLiked_data] = useState({
        name: '',
        desc: '',
    });

    const handleClick = () => {
        onClick();
        localStorage.setItem('image', image);
        navigate(`/recipe/${encodeURIComponent(title)}`);
    };

    const handle_wishlist = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const newLikedData = {
            name: title,
            desc: description
        };

        setLiked_data(newLikedData);

        try {
            const data_send = await axios.post('http://localhost:7000/wishlist', newLikedData);
            if (data_send.status === 200) {
                console.log("Success");
            }
        } catch (error) {
            console.log("Failed to add to wishlist", error);
        }
    };

    return (
        <div className="bg-white shadow-xl rounded-lg overflow-hidden cursor-pointer sm:w-[85%] md:w-[85%] lg:w-[85%] hover:shadow mb-10 w-[90%] ml-0" onClick={handleClick}>
            <div className='rounded-lg bg-zinc-100'>
                <img src={image} alt={title} className="w-full h-48 object-cover p-4 rounded-md" />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
            <div className='-right-48 relative p-2 bg-slate-200 rounded-full hover:shadow-inner' onClick={handle_wishlist}>
                <IoHeartOutline className='text-2xl' />
            </div>
        </div>
    );
}

export default RecipeCard;
