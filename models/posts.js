const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    content:{
        type:String
    },
    image:{
        type:String,
        default:"https://media.licdn.com/dms/image/D4D03AQGgh1z4r_pUFA/profile-displayphoto-shrink_800_800/0/1708962832137?e=1719446400&v=beta&t=ayrde0Q0ITgE3VyudZYuvtHMRjq8TN9rnz85DND1qsw",
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        default:Date.now(),
    }
});

const Post=mongoose.model("Post",postSchema);

module.exports=Post;