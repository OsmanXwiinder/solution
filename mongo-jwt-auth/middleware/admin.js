const jwt = require('jsonwebtoken');
require('dotenv').config();
const  secret = process.env.secret

function adminMiddleware(req,res,next){
    // Implement admin auth logic
    const token = req.headers.authorization;
    // bearer askjfbsdjvfjvj.glnregr.ekfbekei
    const words = token.split(" "); // => ["bearer", "kkdhdfurgf", "rkjgjr", "gjrgruigfu"]
    const jwtToken = words[1] 
    const decodedvalue = jwt.verify(jwtToken, secret)
    if(decodedvalue.username){
        next()
    } else{
        res.status(403).json({msg:"Your are not Autherazied"})
    }
}

module.exports = adminMiddleware

