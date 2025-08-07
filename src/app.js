const express = require("express");

const http = require("http");

const connectDB = require("./config/database");
const app = express();


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
