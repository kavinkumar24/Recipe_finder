import mongoose from "mongoose"

const data_list = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})

export default mongoose.model("wishlist", data_list);
