const validator = require("validator");

        function validateRegisterData(req){
       const {name , emailId, password} = req.body;
       if(!name){
        throw new Error("name should not be empty");
       } else if (!validator.isEmail(emailId)) {
         throw new Error("Invalid email id");
  } else if(!validator.isStrongPassword(password)){
        throw new Error("Password is not strong");
    
    }
}


module.exports = validateRegisterData;
