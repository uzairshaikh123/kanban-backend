const mongoose = require("mongoose")
   const subtaskSchema=new mongoose.Schema({
       title : String,
       isCompleted : boolean
   })
   const subtaskModel = mongoose.model("subtaskdata",subtaskSchema)

   module.exports={
    subtaskModel
   }
   