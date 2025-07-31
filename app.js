//testing that all works with terminal command aliases we just created in package.json
//console.log("hello world") //debug
//importing express
const express = require("express");
const app = express();
const port = 3000;
//creating the endpoint
app.get('/',(req,res)=>{
  res.send('welcome to my blog');
})
//creating the endpoint bacheca to show our posts
app.get('/bacheca',(req,res)=>{
  //importing array of posts
const data = require("./data.js");
//lets test if that worked
console.log(data);
  res.json(data)
})

app.listen(port,()=>{
  console.log(`example app listening on port ${port}`)
})
