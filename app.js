//testing that all works with terminal command aliases we just created in package.json
//console.log("hello world") //debug
//importing express
const express = require("express");
const app = express();
//importing array of posts
const data = require("./data.js");
//lets test if that worked
console.log(data);
//creating the endpoint
app.get('/',(req,res)=>{
  res.send('welcome to my blog');
})

