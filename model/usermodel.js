var mongoose = require("mongoose");

var tasksechema = mongoose.Schema({
    title:{type:String,  required: true},
    description:{type:String},
    complate:{type:Boolean},
    duedate:{type:Date},
    categoryz:{type:String},
})

module.exports = mongoose.model("task",tasksechema);