const express = require("express");
const user = require("../models/user");
const { userAuth } = require("../middlewares/auth");
const Meeting = require("../models/meeting");

const meetRouter = express.Router();

meetRouter.post("/add_to_meet", userAuth,async(req,res)=>{
        const { meetingCode } = req.body;

         try {
            if (!meetingCode) {
            throw new Error("Meeting code is required");
           } 
                const meeting = new Meeting({
                user_id: req.user._id,
                 meetingCode 
                });


                await meeting.save();
                res.json({
                message: `${req.user.name} joined meeting ${meetingCode}`
    });
                
             
         }catch(err){
           res.status(400).send("ERROR:" + err.message); 
         }
})



   meetRouter.get("/All_User_Meet",userAuth,async(req,res)=>{
          try {
           const meetings = await Meeting.find({user_id: req.user._id})
              .populate("user_id", ["name"]);

           res.json(meetings);
        }catch(err){
                res.json({message:`Something went wrong ${err}`})
        }
   })
module.exports = meetRouter;