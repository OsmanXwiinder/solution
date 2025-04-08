const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://osmansaifi30:VI5Xirc5TtXJTEl4@cluster0.tze6j.mongodb.net/course_selling_app2")   
.then(() => console.log("Connected To DB"))

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})

const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
})

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    Image_link:String
})

const User = mongoose.model('user',UserSchema);
const Admin = mongoose.model('Admin', AdminSchema);
const Course = mongoose.model('Course',CourseSchema);


module.exports = {
    User,
    Admin,
    Course
}