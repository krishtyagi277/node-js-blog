const path = require("path");
const { config, engine } = require('express-edge');
const express = require('express');
const edge = require("edge.js")
const app =  express();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload")
const expressSession = require("express-session")
const connectMongo = require("connect-mongo")
const connectFlash = require("connect-flash")
let port = process.env.PORT || 4000;

const createPostController = require("./controllers/createPost")
const homePageController = require("./controllers/homePage")
const storePostController = require("./controllers/storePost")
const getPostController = require("./controllers/getPost")
const createUserController = require("./controllers/createUser")
const storeUserController = require("./controllers/storeUser")
const loginController = require("./controllers/login")
const loginUserController = require("./controllers/loginUser")
const logoutController = require("./controllers/logoutController")

const validateCreatePostMiddleware = require("./middleware/storePost")
const auth = require("./middleware/auth")
const redirectIfAuthenticate = require("./middleware/redirectIfAuthenticated")
const mongoStore = connectMongo(expressSession)

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/node-js-blog', { useNewUrlParser: true });
app.use(connectFlash())

app.use(
  express.urlencoded({
    extended: true
  })
)
// this secret key is used for encrypt the data
app.use(expressSession({
  secret:'secret',
  store: new mongoStore({
    mongooseConnection:mongoose.connection
  })
}))
app.use(express.json())
app.use(fileUpload())
app.use(express.static('public'));
app.use(engine);
app.set('views', `${__dirname}/views`)
app.use('*', (req, res, next)=>{
  
  edge.global('auth', req.session.userId)

  next()
})

//app.use('/posts/store', )



app.get("/", homePageController)

app.get("/post/:id", getPostController)


app.get("/posts/new", auth, createPostController)

app.post("/posts/store", auth,  validateCreatePostMiddleware, storePostController)

app.get("/auth/register", redirectIfAuthenticate, createUserController)

app.post("/user/register", redirectIfAuthenticate, storeUserController)

app.get('/auth/login', redirectIfAuthenticate, loginController)

app.post('/user/login', redirectIfAuthenticate, loginUserController)

app.get('/auth/logout', logoutController)

app.get("/about",(req,res)=>{

 res.render('about');
})



app.get("/contact",(req, res)=>{
 
res.render('contact')
})




app.listen(port, ()=>{
    
   console.log(`App listening on port ${port}`);
})

