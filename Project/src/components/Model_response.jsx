import  { useEffect, useState } from 'react';

function GeneratedText() {
    const [data, setData] = useState({ title: '', content: [] });

    useEffect(() => {
        fetch('http://localhost:3000/api/generated-text')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Ensure content is an array
                setData({
                    title: data.title,
                    content: Array.isArray(data.content) ? data.content : [data.content],
                });
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    
          
    return (
        <div>
            <h1 className="title">{data.title}</h1>
            <div className="content">
                {data.content.map((line, index) => (  
                    <div key={index} className="card">
                        {line}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GeneratedText;
