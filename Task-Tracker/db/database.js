const mongoose = require('mongoose')
require('dotenv').config()
const dbLink = process.env.dbLink
// console.log(dbLink)


mongoose.connect(dbLink).then(() => console.log("Connected To Db "))


 const taskCollectionSchema = new mongoose.Schema({
    title:String,
    description:String,
    status:Boolean,
    createdAt:TimeRanges,
    updatedAt:TimeRanges
 })

 const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
 })


 const Task = mongoose.model('Task',taskCollectionSchema);
 const User = mongoose.model('User',UserSchema);



 module.exports = {
    Task,
    User
 }
