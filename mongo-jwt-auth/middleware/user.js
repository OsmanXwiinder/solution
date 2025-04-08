const jwt = require('jsonwebtoken')
require('dotenv').config();
const  secret = process.env.secret




function usermiddleware(req,res,next){
    const token = req.headers.authorization
    const userword = token.split(" ");
    const jsonToken = userword[1];
    const decodedvalue = jwt.verify(jsonToken, secret);
    if(decodedvalue.username){
        req.username = decodedvalue.username;
        next();
    } else {
        res.status(403).json({msg:"You are not autharized"})
    }
}

module.exports = usermiddleware;    
