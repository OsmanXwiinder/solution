const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");


// User Routes
router.post('/signup',(req,res) => {
    const username = req.body.username
    const password = req.body.password;

    User.create({
        username,
        password
    })
    res.status(200).json({msg:"User Created SuccsessFully -_-"})
})

        // end point see all courses
router.get('/courses',async (req,res) => {
    // impltement listing all courses logic
    const response = await Course.find({})

    res.json({
        courses: response
    })
})

router.post('/courses/:courseId',userMiddleware, (req,res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    //zod
    User.updateOne({
        username:username,       
    },{
        "$push":{
            purchasedCourses:courseId
        }
    }).catch((e) => {
        console.log(e)
    })
    res.json({
        msg:"course purchased Successfully -_-"
    }) 
})

//  how they get  puchased courses
router.get('/purchasedCourses',userMiddleware,async (req,res) => {
    const user = await User.findOne({
        username:req.headers.username,
    })
    console.log(user.purchasedCourses)
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({courses})
})

module.exports = router;