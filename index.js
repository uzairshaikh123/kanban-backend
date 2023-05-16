const express = require('express')
const app=express()
const cors=require("cors")
const { userrouter } = require('./Routes/user.route')
const { connection } = require('./db')
const { boardrouter } = require('./Routes/Board.route')


require("dotenv").config()
app.use(express.json())
app.use(cors())


app.use("/user",userrouter)
app.use("/board",boardrouter)

app.listen(process.env.port,async ()=>{
try {
     connection().then((res)=>{
        console.log('mongo is connected')
        
    }).catch((error)=>{
        console.log(error)
    })
} catch (error) {
    console.log(error)
}
    console.log('app is connected')
})