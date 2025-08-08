const { MongoGridFSChunkError } = require("mongodb");
const mongoose = require("mongoose");

const meetingSchema = mongoose.newSchema({
    user_id:
    {
        type:String
    },

    meeting_code:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        require:true,
        default:Date.now,

    }
})
 
module.exports = module.model(Meeting , meetingSchema);