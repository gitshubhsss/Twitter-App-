const { log } = require("console");
const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({ extended: true }));
//generating the random id
const { v4: uuidv4 } = require('uuid');
let methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.listen(port,()=>{
    console.log(`app is listening on the port ${port}`)
})


//database
let posts = [
    {
      id: uuidv4(),
      username: "ShubhamRanjane",
      content: "Hey I am shubham ranjane.This twitter profile clone i have made using expressJs for backend and for the layout i have used HTML and CSS",
      image:"https://media.licdn.com/dms/image/D4D03AQGgh1z4r_pUFA/profile-displayphoto-shrink_800_800/0/1708962832137?e=1719446400&v=beta&t=ayrde0Q0ITgE3VyudZYuvtHMRjq8TN9rnz85DND1qsw",
    },
    {
      id: uuidv4(),
      username: "ShubhamRanjane",
      content: "Node Js is not a Language or library or framework it is just a runtime enoviorment that allows us to run JavaScript outside the browser ",
      image:"https://media.licdn.com/dms/image/D4D03AQGgh1z4r_pUFA/profile-displayphoto-shrink_800_800/0/1708962832137?e=1719446400&v=beta&t=ayrde0Q0ITgE3VyudZYuvtHMRjq8TN9rnz85DND1qsw",
    },
    {
      id: uuidv4(),
      username: "ShubhamRanjane",
      content: "In NodeJs the npm is a standard Node Package Manager for NodeJS.Package means the code is already written by someone",
      image:"https://media.licdn.com/dms/image/D4D03AQGgh1z4r_pUFA/profile-displayphoto-shrink_800_800/0/1708962832137?e=1719446400&v=beta&t=ayrde0Q0ITgE3VyudZYuvtHMRjq8TN9rnz85DND1qsw",
    },
    {
      id: uuidv4(),
      username: "ShubhamRanjane",
      content: "Express Js is a web application Framework that helps us to make web applications . it is used for server side programming",
      image:"https://media.licdn.com/dms/image/D4D03AQGgh1z4r_pUFA/profile-displayphoto-shrink_800_800/0/1708962832137?e=1719446400&v=beta&t=ayrde0Q0ITgE3VyudZYuvtHMRjq8TN9rnz85DND1qsw",
    },
   
  ];

let username=posts[0].username;
let image=posts[0].image
app.get("/profile",(req,res)=>{
    res.render("index.ejs",{posts,username,image})
}) 

app.get("/profile/new",(req,res)=>{
  res.render("new.ejs",{posts,username,image})
})

app.post("/profile",(req,res)=>{
    let id= uuidv4();
    let{content}=req.body;
    posts.push({id,username,content,image})
    // console.log({id,username,content,image});
    res.redirect("/profile")
})

//edit form 

app.get("/profile/:id/edit", (req, res) => {

  let { id } = req.params;
  let post = posts.find(findId);
  function findId(po) {
    return id === po.id;
  }
  res.render("edit.ejs", {post,username,image});// edit.ejs will open
});

//updating the text inside the text content

app.patch("/profile/:id",(req,res)=>{
  let {id}=req.params;
  let post=posts.find(findId);
  function findId(po){
    return id===po.id; 
  }
  let newContent=req.body.content;
  post.content=newContent;
  res.redirect("/profile") 
})

//delete the post

app.delete("/profile/:id",(req,res)=>{
  let {id}=req.params;
  posts=posts.filter((po)=>{
    return id!==po.id;
  });
 
  res.redirect("/profile")
})