const express = require("express")
const { authrouter } = require("../middlewares/auth.middleware")
const { BoardModel } = require("../Model/Board.model")

const boardrouter = express.Router()

boardrouter.get("/",authrouter,async (req,res)=>{

try {
    let data = await BoardModel.find()
    res.status(200).send({data})
    
} catch (error) {
    
    res.status(500).send({"msg":error.message})
}

})
boardrouter.post("/add",authrouter,async (req,res)=>{

let  {name,tasks}=req.body


try {
    let data = new BoardModel(req.body)
    await data.save()
    res.status(200).send({"msg":"Board added"})
    
} catch (error) {
    
    res.status(500).send({"msg":error.message})
}

})

module.exports={
    boardrouter
}