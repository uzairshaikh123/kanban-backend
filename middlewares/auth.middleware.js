const express = require("express")
const jwt = require("jsonwebtoken")
const authrouter = express.Router()


authrouter.use((req,res,next)=>{
const token = req.headers.authorization
console.log(token)
    jwt.verify(token, 'user', function(err, decoded) {
       if(decoded){
        req.body.userID=decoded.userID
        next()
       }else{
        res.status(500).send({"msg":"This is a private route"})
       } 
      });


})

module.exports={
    authrouter
}