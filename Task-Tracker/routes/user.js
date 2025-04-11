const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;
const usermiddleware = require('../middleware/user');
const {User} = require('../db/database')
const z = require('zod')

const inputSchema = z.object({
    username:z.string(),
    password:z.string()
})


router.post('/signup',async (req,res) => {
    const username = req.body.username;
    const password = req.body.password

    const verifyInput = inputSchema.safeParse({username,password})

    if(verifyInput.success){
         await User.create({
            username,
            password
        })
    
        res.status(200).json({
             signupDetail : "User Sign Up Successfully"
        })    
    } else {
        res.status(211).json({msg:"Enter Valid Input"})
    }

    

})

router.post('/signin',(req,res) => {
    const username = req.headers.username
    const password = req.headers.password

    const input = inputSchema.safeParse({username,password})

    if(input.success){
        const token = jwt.sign({username}, JWT_SECRET)

        res.status(200).json({
            YourToken: token
        })
    } else {
        res.status(211).json({msg:"enter valid input "})
    }

    

})

module.exports = router;