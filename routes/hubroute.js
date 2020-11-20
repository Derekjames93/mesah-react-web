var express = require('express');
var router = express.Router();
const models = require('../models')
const bcrypt = require('bcrypt') 


//Check Auth
function checkAuth(req, res, next) {
    if(req.session.user){
      next()
    }else{
      res.status(401).json({
        error: 'Please Login to View'
      })
    }
  }


//todo Get user info
router.get('/', checkAuth, (req,res) => {
    models.User.findOne({
        where: {
            user: req.session.user
        }
    })
    .then((user) =>{
        res.json(user)
    })
})

module.exports = router