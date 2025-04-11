const jwt = require('jsonwebtoken')
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

console.log(JWT_SECRET);

function usermiddleware(req,res,next){
    const username = req.headers.username;
    const tokenValue = req.headers.authorization;

    const token = tokenValue.split(" ")[1]

    try{
        const decoded = jwt.verify(token,JWT_SECRET)
        req.username = decoded.username
        next()
    } catch(e) {
        res.status(403).json({
            msg:"Error"
        })
        console.log(e)
    }


}

module.exports = usermiddleware; 
