const mongoose = require('mongoose')
require('dotenv').config()
const db_Link = process.env.db_Link
console.log(db_Link)


mongoose.connect(db_Link).then(() => console.log("Connected To Db "))


 const taskCollectionSchema = new mongoose.Schema({
    title:String,
    description:String,
    status:Boolean,
    createdAt:Date,
    updatedAt:Date
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
