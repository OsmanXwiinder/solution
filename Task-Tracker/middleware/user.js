const jwt = require('jsonwebtoken')
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

console.log(JWT_SECRET);

function usermiddleware(req,res){
    const username = req.headers.username;
    const password = req.headers.password;

    const decodedvalue = jwt.verify({username},JWT_SECRET);
    
    if(decodedvalue){
        next()
    } else {
        res.status(403).json({msg:"User Not Verified"});
    }


}

module.exports = usermiddleware; 
