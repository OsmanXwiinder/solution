const jwt = require('jsonwebtoken')
const secret = require('../index');




function usermiddleware(){
    const token = req.headers.autherization
    const userword = token.split(" ");
    const jsonToken = userword[1];
    const decodedvalue = jwt.verify(jsonToken, secret);
    if(decodedvalue.username){
        next()
    } else {
        res.status(403).json({msg:"You are not autharized"})
    }
}

module.exports = usermiddleware;    
