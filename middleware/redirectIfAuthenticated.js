const user = require("../database/models/User")
const User = require("../database/models/User")

module.exports = (req, res, next)=>{

// fetch user from db
if(req.session.userId){

    
    return res.redirect("/")
    

}

//verify user 

//if user is valid, permit

//else send back
next()
}