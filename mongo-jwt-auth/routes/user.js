const express = require("express");
const router = express.Router();
const userMiddleware = require('../middleware/user');
const { User, Course } = require("../db/db");
const jwt = require('jsonwebtoken')
require('dotenv').config();
const  secret = process.env.secret

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.headers.username
    const password = req.headers.password

    const isValidated = await User.create({
        username:username,
        password:password
    })

    res.status(200).json({msg:"User Created Successfully"})

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username
    const password = req.headers.password

    const isValidated = await User.find({
        username,
        password
    })
    if(isValidated){
        const token = jwt.sign({username}, secret)
        res.status(201).json({
            YourToken:token
        })
    } else {
        res.status(201).json({
            msg:"User doesn't Exist"
        })
    }                
});

router.get('/courses', async (req, res) => {
    
   const allCourses = await Course.find({});

   res.status(200).json({
    allCourses
   })


    
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username

    User.updateOne({
            username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    }).ca

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router