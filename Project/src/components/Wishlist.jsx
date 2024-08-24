import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Wishlist() {
    const [liked_data,setLiked_data] = useState([])
    const[count,setCount] = useState(0)
    const[theme,setTheme] = useState('light')
    const handlewishlist_fetch = async(req,res)=>{
        try{
        const response = await axios.get('http://localhost:7000/liked_data');
        if(response.status==200&& Array.isArray(response.data.data)){
            const nameSet = new Set();

            const unique_data = response.data.data.filter(item=>{
                if(!nameSet.has(item.name)){
                    nameSet.add(item.name);
                    return true;
                }
                return false
            })

            setLiked_data(unique_data)
            console.log(liked_data)
            const uniqueItems = new Set(response.data.data.map(item => item.name));
            setCount(uniqueItems.size);
        }
        else{
            console.log("not an array")
        }
    }
    catch(error){
        console.log(error)
    }
    }
    useEffect(() => {
        handlewishlist_fetch();
    }, []);
  return (
    <div>
      <h1>wishlist</h1>
      <button onClick={handlewishlist_fetch}>get</button>
      <p>{count}</p>
        <div className='bg-slate-100 w-[75%] p-1 m-4 ml-40'>
            <div className='h-10 w-full bg-gray-300'></div>
        {liked_data.length > 0 ? (
                        liked_data.map((item, index) => (
                            <div key={index} className="p-4 m-2 border-solid flex justify-between border-b-2 w-full">
                                <div className='bg-white p-5 rounded-lg shadow-md w-full '>
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                                </div>
                                <div className='mx-auto p-0 relative right-12 top-10'>
                                    <p>
                                    Heart
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
            <div className={`fixed rounded-md p-4 max-w-full min-h-full inset-0 z-50 w-full md:w-full  ml-0 md:ml-0 mx-auto ${theme === 'dark' ? 'bg-gray-800' : 'bg-white '} sm:ml-0`} >
                <div className="animate-pulse flex space-x-4 mt-16 ml-0 md:ml-20">
            <div className={`rounded-full h-10 w-10`}></div>
            <div className="flex-1 space-y-6 py-10 md:py-1">
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className="space-y-5 md:space-y-3">
                <div className="grid grid-cols-3 gap-4">
                    <div className={`h-2 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded col-span-2`}></div>
                    <div className={`h-2 w-[70%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded col-span-1`}></div>
                </div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className="grid grid-cols-3 gap-4">
                <div className={`h-2 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2  ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                </div>
                
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className="grid grid-cols-3 gap-4">
                <div className={`h-2  ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                
                </div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className="grid grid-cols-3 gap-4">
                <div className={`h-2 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2  ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                </div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2 w-[90%] ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className="grid grid-cols-3 gap-4">
                <div className={`h-2 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                <div className={`h-2  ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded`}></div>
                </div>
                </div>
                
            </div>
            </div>
            </div>
        </div>
    )}
    </div>
    </div>
  )
}

export default Wishlist



const handlewishlist_fetch = async () => {
    try {
        const response = await axios.get('http://localhost:7000/liked_data');
        if (response.status === 200 && Array.isArray(response.data.data)) {
            // Create a Set of unique names
            const nameSet = new Set();
            const uniqueData = response.data.data.filter(item => {
                if (!nameSet.has(item.name)) {
                    nameSet.add(item.name);
                    return true;
                }
                return false;
            });

            setLiked_data(uniqueData);

            // Set the count based on the number of unique names
            setCount(nameSet.size);
        } else {
            console.log("Not an array");
        }
    } catch (error) {
        console.log(error);
    }
}
