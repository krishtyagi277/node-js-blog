const User = require("../database/models/User")

module.exports = (req, res, next)=>{

// fetch user from db

User.findById(req.session.userId, (error, user)=>{

    if(error || !user){
       return res.redirect("/auth/login")
    }

  next()
})

//verify user 

//if user is valid, permit

//else send back

}