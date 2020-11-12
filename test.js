const mongoose = require('mongoose');

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog');


// Post.create({
//     title:"My second blog",
//     description:"blog post",
//     content:"lorem ipsum content"
// }, (error,  post)=>{

//     console.log(error, post);
// })


// Post.find({
//   // title:"My second blog" 
// }, (error,posts)=>{
//  console.log(error, posts)
// })

// Post.findById("5f71abf7ea9790400df0ba02", (err, post)=>{
//     console.log(err, post)
// })

// Post.findByIdAndUpdate("5f71abf7ea9790400df0ba02",{
     
//     description:"second blog post"
// }, (err, post)=>{
//    console.log(err, post)
// })