import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Wishlist() {
    const [liked_data,setLiked_data] = useState([])
    const[count,setCount] = useState(0)
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
        
        {liked_data.length > 0 ? (
                        liked_data.map((item, index) => (
                            <div key={index} className="p-4 m-2 border border-gray-300 rounded-lg">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="mt-2 text-gray-600">{item.desc}</p>
                            </div>
                        ))
                    ) : (
                        <p>No liked data available</p>
                    )}
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
