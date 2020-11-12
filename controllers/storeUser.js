const User = require("../database/models/User")

module.exports = (req, res)=>{

    User.create(req.body , (error, user)=>{

        if(error){
            
            const registrationError = Object.keys(error.errors).map(key=>error.errors[key].message);
            
            
            req.flash('registrationError', registrationError )
            req.flash('data', req.body)
            return res.redirect('/auth/register')
        }
        res.redirect('/')
    })
}