const express =require("express")
const userrouter = express.Router()
const bcrypt = require('bcrypt');
const { userModel } = require("../Model/user.model");
const jwt = require('jsonwebtoken');
const { authrouter } = require("../middlewares/auth.middleware");

userrouter.post("/signup",async (req,res)=>{

    const {email,password}=req.body

    try {
        let findemail=await userModel.find({email})
        if(findemail.length>0){
            res.status(500).send({"msg":"User Already Exist"})
        }else{
            bcrypt.hash(password, 5, async function(err, hash) {
               let data = new userModel({email,password:hash})
              await  data.save()
              res.status(200).send({"msg":"User Registered Successfully"})
            });
        }
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
    
})




userrouter.post("/signin",async (req,res)=>{

    const {email,password}=req.body

    try {
        let findemail=await userModel.find({email})
        let hashpass= findemail[0].password
        bcrypt.compare(password, hashpass, function(err, result) {
           if(result){
            res.status(200).send({"msg":"User LoggedIn Successfully",token:jwt.sign({ userID: findemail[0]._id }, 'user')})
           }else{
            res.status(500).send({"msg":"User Not found"})
        }
        
    });
} catch (error) {
        res.status(500).send({"msg":error.message})
        
    }
    
})





module.exports={
    userrouter
}