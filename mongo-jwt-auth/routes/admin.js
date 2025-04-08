const express = require('express')
const adminMiddleware = require('../middleware/admin')
const router  = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config();
const  secret = process.env.secret


const {Admin} = require('../db/db');


router.post('/signup',async (req,res) => {
    const username = req.body.username
    const password = req.body.password

    await Admin.create({
        username,
        password
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

router.post('/courses',(req,res) => {

})

router.get('/courses', (req,res) => {

})

module.exports = router;
