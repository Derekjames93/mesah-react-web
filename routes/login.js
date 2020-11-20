var express = require('express');
var router = express.Router();
const models = require('../models')
const bcrypt = require('bcrypt') 
const session = require('express-session')


//Login
router.post('/', (req,res) => {
    if(!req.body.email || !req.body.password){
        res.status(400).json({
            error: ' Please complete all required fields'
        })
        return;
    }

    models.User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then((user) => {
        if(!user){
            res.status(404).json({
                error: 'No user with that email'
            })
            return;
        }

        bcrypt.compare(req.body.password, user.password, (err,matched) => {
            if(matched){
                req.session.user = user
                res.status(201).json({
                    success: 'Logged In',
                    user
                })
            }
            else{
                res.status(404).json({
                    error: 'Incorrect password'
                })
            }
        })

    })
})
//logout
router.post('/logout', (req,res) => {
    
            req.session.user = null
            res.status(201).json({
                success: 'Logged Out',
            })
        
    })

module.exports = router