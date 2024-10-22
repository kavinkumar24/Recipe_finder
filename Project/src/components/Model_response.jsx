import { useEffect, useState } from 'react';

function GeneratedText() {
    const [data, setData] = useState({ title: '', content: '' });

    useEffect(() => {
        fetch('https://naturals-emart-project.onrender.com/api/generated-text')
            .then((response) => {
                console.log("API response:", response); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log("Parsed data:", data); // Check if data is parsed correctly
                setData({
                    title: data.title,
                    content: data.content.join('<br>'), // Join content parts into a single string with <br> tags
                });
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    
    
    return (
        <div>
            {/* Render the title */}
            <h1 className="title">{data.title}</h1>
            
            {/* Render the content using dangerouslySetInnerHTML */}
            <div
                className="content"
                dangerouslySetInnerHTML={{ __html: data.content }}
            />
        </div>
    );
}

export default GeneratedText;
