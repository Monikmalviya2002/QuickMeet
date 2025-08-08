const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
       name:{
        type: String,
        required: true
       },

        emailId: {
     type : String,
     required: true,
     lowercase :true,
     trim : true,
     unique : true,
    },

       password:{
         type : String,
        require: true,
       }


       
})

 module.exports = mongoose.model("User", userSchema);