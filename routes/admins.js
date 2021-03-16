
var express = require('express');
var router = express.Router();
const models = require('../models')
const bcrypt = require('bcrypt'); 
const checkAuth = require('../checkAuth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req,file,cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
})

const fileFilter = (req,file,cb) => {
    
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/svg'){
        // accept a file
        console.log('file accepted')
        cb(null, true)
    }else{
        // reject a file
        console.log('file denied')
        cb(null, false)
    }
    
}

const upload = multer({
    storage: storage, 
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


//*GET all users
router.get('/', (req,res) => {
    models.Admins.findAll()
    .then((admin) => {
        res.json(admin)
    })
})

//Put for Bio
router.put('/hub', checkAuth, (req,res) => {
    models.User.findOne({
        where: {
            id: req.session.user.id
        }
    })

    .then((user)=>{
        user.update({
            bio: req.body.bio
        })

        .then((result) => {
            res.status(201).json(result)
        })
    })
})

/* GET users listing. */
router.get('/current', checkAuth, (req,res) => {
    models.User.findOne({
        where: {
            id: req.session.user.id
        }
    })
    .then((user) =>{
        if(user){
            res.json(user)
        }else {
            res.status(401).json({
                error:'No User logged in'
            })
        }
    })
})


//Create user
router.post('/',upload.single('profileImage'), (req,res,) => {
    console.log(req.file);
    if(!req.body || !req.body.email || !req.body.name || !req.body.password || !req.body.jobTitle){
        res.status(400).json({
            error: ' Please complete all required fields'
        })
        return;
    }
    console.log("=======START==========")
    const { email, name, password, jobTitle } = req.body
    
    bcrypt.hash(password, 10, (err, hash) => {

        models.User.create({
            email: email,
            profileImage: req.file && req.file.path ? req.file.path : '/uploads/2020-12-01T13:30:15.072Zdownload.png',
            name: name,
            jobTitle: jobTitle,
            password: hash
        })
        .then((result) => {
            res.status(201).json(result)
        })
    })

})

// update profile Info
router.patch('/edit', checkAuth, (req,res) =>{
    console.log(req.session.user.id)
    const updateObject = {}
    if(!req.body && !req.body.email && !req.body.profileImage && !req.body.name && !req.body.jobTitle){
        res.status(400).json({
            error: 'Please pick a field to change'
        })
        return;
    }

    const { email, name, jobTitle, profileImage } = req.body
    const params = { email, name, jobTitle, profileImage}
    Object.keys(params).forEach(key => {params[key] ? updateObject[key] = params[key] : ''})
    models.User.update(updateObject, {
        where: {
            id: req.session.user.id
        }
    })
        .then((updated) => {
            updated && updated[0] > 0 ?
                res.status(202).json({
                    success: 'profile updated'
                })
            :
                res.status(404).json({
                    error: 'Profile not found'
                })
        })
        .catch((e) => {
            res.status(500).json({
                error: 'A database error has occurred'
            })
        })
})


module.exports = router;
