const express = require('express')
const adminMiddleware = require('../middleware/admin')
const router  = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config();
const  secret = process.env.secret


const {Admin, Course} = require('../db/db');


router.post('/signup',async (req,res) => {
    const username = req.body.username
    const password = req.body.password

    await Admin.create({
        username:username,
        password:password
    })

    res.status(200).json({msg:"Your Signin Success"})

})

router.post('/signin' , async (req,res) => {
    const username = req.headers.username
    const password = req.headers.password

    const isValidated = await Admin.find({
        username,
        password
    })
    if(isValidated){
        const token  =  jwt.sign({username}, secret);

        res.status(200).json({
            YourToken: token
        })    
    } else {
        res.status(411).json({msg:"Admin Not Exist"})
    }
    
})

router.post('/courses',adminMiddleware,async (req,res) => {
    // implemnet Course logic
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const Imagelink = req.body.Imagelink

    const newCourse =  await Course.create({
        title,
        description,
        price,
        Imagelink

    })

    res.status(200).json({
        msg:"Course Created Successfully",
        courseId:newCourse._id
    })

})

router.get('/courses',adminMiddleware, async (req,res) => {
    
    
    const allCourses = await Course.find({})

    res.status(200).json({
        allCourses
    })
})

module.exports = router;
