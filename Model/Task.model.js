
   const mongoose = require("mongoose")
const TaskSchema=new mongoose.Schema({
       title : String,
       description : String,
       status : {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
       subtask : [{ type: ObjectId, ref: 'Subtask'}]
   })
const TaskModel = mongoose.model("boarddata",TaskSchema)


module.exports={
    TaskModel
}
