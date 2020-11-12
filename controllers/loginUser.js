const User  = require('../database/models/User')
const bcrypt = require("bcrypt")

module.exports =  (req, res)=>{

    const {email, password} = req.body;
    
    // try to find the user

      User.find({email}, (error, user)=>{

        if(user){
            // compare password
           
         bcrypt.compare(password, user[0].password, (err, same)=>{
                
                if(same){
                    req.session.userId =  user[0]._id 
                    res.redirect('/')
                }
                else{
                    res.redirect('/auth/login')
                }
            })
        }
        else{
            return res.redirect("/auth/login")
        }
     })


 
}