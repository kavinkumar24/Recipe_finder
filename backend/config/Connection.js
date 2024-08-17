import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const DB = process.env.URL

if(!DB){
    console.error("URL is not set");
    process.exit(1);
}
const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection successful");
    } catch (error) {
        console.error("Error in connection", error);
        process.exit(1); 
    }
};

export default connectToDatabase;