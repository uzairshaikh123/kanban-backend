const mongoose = require("mongoose")
const BoardSchema=new mongoose.Schema({
         name: String,
         tasks: [{ type: [], ref: 'Task'}]
       
})
const BoardModel = mongoose.model("boarddata",BoardSchema)


module.exports={
    BoardModel
}
