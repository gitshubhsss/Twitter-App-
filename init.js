const mongoose=require("mongoose");

const Post=require("./models/posts.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/twiter");
}
main().then(()=>{
    console.log("connection success");
}).catch((err)=>{
    console.log("connection err",err);
});

let posts = [
    {
      username: "ShubhamRanjane",
      content: "Hey I am shubham ranjane.This twitter profile clone i have made using expressJs for backend and for the layout i have used HTML and CSS",
      image:"https://media.licdn.com/dms/image/D4D03AQGgh1z4r_pUFA/profile-displayphoto-shrink_800_800/0/1708962832137?e=1719446400&v=beta&t=ayrde0Q0ITgE3VyudZYuvtHMRjq8TN9rnz85DND1qsw",
    },
    {
      username: "ShubhamRanjane",
      content: "Node Js is not a Language or library or framework it is just a runtime enoviorment that allows us to run JavaScript outside the browser ",
      image:"https://media.licdn.com/dms/image/D4D03AQGgh1z4r_pUFA/profile-displayphoto-shrink_800_800/0/1708962832137?e=1719446400&v=beta&t=ayrde0Q0ITgE3VyudZYuvtHMRjq8TN9rnz85DND1qsw",
    },
    {
      username: "ShubhamRanjane",
      content: "In NodeJs the npm is a standard Node Package Manager for NodeJS.Package means the code is already written by someone",
      image:"https://media.licdn.com/dms/image/D4D03AQGgh1z4r_pUFA/profile-displayphoto-shrink_800_800/0/1708962832137?e=1719446400&v=beta&t=ayrde0Q0ITgE3VyudZYuvtHMRjq8TN9rnz85DND1qsw",
    },
    {
      username: "ShubhamRanjane",
      content: "Express Js is a web application Framework that helps us to make web applications . it is used for server side programming",
      image:"https://media.licdn.com/dms/image/D4D03AQGgh1z4r_pUFA/profile-displayphoto-shrink_800_800/0/1708962832137?e=1719446400&v=beta&t=ayrde0Q0ITgE3VyudZYuvtHMRjq8TN9rnz85DND1qsw",
    },
   
  ];


Post.insertMany(posts);