       const mongoose = require("mongoose");

     meetingSchema = new mongoose.Schema({
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         required: true
        },
     meetingCode: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model("Meeting", meetingSchema);
