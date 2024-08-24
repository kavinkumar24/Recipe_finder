import express, { json } from "express";
const app = express()
const port = 7000;
import connection from './Connection.js'
import collection from './mongo.js'
import cors from 'cors'

connection();

//middleware to parse json bodies
app.use(json());
app.use(cors())

app.get("/",(req,res)=>{
res.send("Hello world");
})

app.get('/liked_data',async(req,res)=>{
    try{
        const alldata = await collection.find({}).exec();
        res.send({status:"ok",data:alldata})
    }
    catch(error){
        console.log(error)
    }
})
app.post("/wishlist", async(req,res)=>{
try{
    const{name,desc,img} = req.body;
    console.log(img)
    if (!name || !desc) {
        return res.status(400).json({ error: "Name and description are required" });
    }
    const newwishlist = new collection({
        name,
        description:desc,
        image:img
    })

    await newwishlist.save(); 

    res.status(200).json({ message: "Wishlist item added successfully" }); 
} catch (error) {
    res.status(500).json({ error: "Failed to add wishlist item" }); // Respond with error message
}

})



app.listen(port,()=>{
    console.log("atlas server started");
})

