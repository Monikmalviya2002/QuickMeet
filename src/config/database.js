const mongoose = require("mongoose");

const connectDB  = async()=>{
      const dbURL = "mongodb+srv://monikmalviya2:knObj0x9qHuikiYi@monik04.vyrcayb.mongodb.net/QuickMeet";

      if(!dbURL){
        console.log("DB_CONNECTION_STRING not define")
        return;
      }

      try{
         await mongoose.connect(dbURL);
          console.log("✅ MongoDB connected");

      }catch(err){
        console.error("❌ MongoDB connection error:", err.message);
        throw err;
        
      }

};

    module.exports = connectDB;