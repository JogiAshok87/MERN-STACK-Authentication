const mongoose = require('mongoose')

const registerSchema = new  mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true,
        
        unique:true,
        
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    createdDate: { type: Date, default: Date.now },
    createdBy: { type: String, default: "system" },
    updatedDate: { type: Date, default: Date.now },
    updatedBy: { type: String, default: "system" },

})

module.exports = mongoose.model('Register',registerSchema)