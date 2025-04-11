const express = require('express')
const router = express.Router()
const {Task} = require('../db/database')
const z = require('zod')
const usermiddleware = require('../middleware/user')

const taskInputSchema  = z.object({
    title:z.string().max(20),
    description:z.string().max(50)
})

router.post('/addTask',usermiddleware,(req,res) => {
    const username = req.headers.username;
    console.log(username)
    const title = req.body.title;
    const description = req.body.description

    const inputTask  = taskInputSchema.safeParse({title,description})

    if(inputTask.success){
        const task1 = Task.create({
            title,
            description
        })
    
        res.status(200).json({
            msg:"Task added Successfully -_-"
        })
    }else{
        res.status(211).json({
            msg:"please Enter valid Task"
        })
    }

})

router.get('/getTask',(res,req) => {

}) 

router.put('/EditTasks/:id',(req,res) => {

})

router.delete('/deleteTask/:id', (req,res) => {

})


module.exports = router;