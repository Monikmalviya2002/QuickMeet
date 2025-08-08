const express = require("express");
const cookieParser = require("cookie-parser");
const http = require("http");

const connectDB = require("./config/database");
const app = express();

app.use(express.json());
app.use(cookieParser());


 const userRouter= require("./routes/userauth");
 const meetRouter = require("./routes/meeting");

 app.use("/",userRouter);
 app.use("/",meetRouter);

const server = http.createServer(app);
connectDB()
.then(()=>{
    console.log("DATABASE connection is succesfull");


app.listen(7777,()=>{
    console.log("server is active");
})
})

.catch(()=>{
    console.log("DATABASE connection is failed");
})
