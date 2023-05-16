const mongoose = require('mongoose')
require("dotenv").config()


function connection(){return mongoose.connect(process.env.url)}

module.exports={
    connection
}