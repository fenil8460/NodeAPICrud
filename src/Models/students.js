const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        minlength : 3
    }
})