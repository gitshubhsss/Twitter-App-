const express = require("express");
const app = express();
const port = 8080;

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//generating date 
const moment = require('moment'); // require

//generating the random id

let methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log(`app is listening on the port ${port}`);
});

//database

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/twiter");
}
main()
  .then(() => {
    console.log("connection success");
  })
  .catch(() => {
    console.log("connection error");
  });

const Post = require("./models/posts.js");

app.get("/profile", async (req, res) => {
  let posts = await Post.find();
  let username = posts[0].username;
  let image = posts[0].image;
  res.render("index.ejs", { posts, username, image });
});

app.get("/profile/new", async (req, res) => {
  let posts = await Post.find();
  let username = posts[0].username;
  let image = posts[0].image;
  res.render("new.ejs", { posts, username, image });
});

app.post("/profile",async(req,res)=>{
  let posts = await Post.find();
  let username = posts[0].username;
  let image = posts[0].image;
    let{content}=req.body;
    let newPost=new Post({
      username:username,
      content:content,
      image:image
    });

    newPost.save().then(()=>{
      console.log("post saved successfully");
    }).catch(()=>{
      console.log("err");
    });
    res.redirect("/profile")
})

// //edit form

app.get("/profile/:_id/edit", async(req, res) => {
  let { _id } = req.params;
  let post = await Post.findById(_id);
  let username = post.username;
  let image = post.image;
  res.render("edit.ejs", {post,username,image});// edit.ejs will open
});

// //updating the text inside the text content

app.patch("/profile/:_id",async(req,res)=>{
  let {_id}=req.params;
  let{content}=req.body
  let post = await Post.findByIdAndUpdate(_id,{content:content},{new:true});
  res.redirect("/profile")
})

// //delete the post

app.delete("/profile/:_id",async(req,res)=>{
  let {_id}=req.params;
  let deletedPost=await Post.findByIdAndDelete(_id);
  res.redirect("/profile")
})
