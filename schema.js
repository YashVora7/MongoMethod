const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        name:String,
        password:String,
        email:String,
        grid:Number
    }
);

let student = mongoose.model("studentdata",studentSchema)

module.exports=student