const http = require("http");
const fs = require("fs");
const url  = require("url");
const express = require("express");

const app = express(); 

app.get("/",(req,res) => {
    return res.send('Hello From Home Page');
});

app.get("/about", (req,res)=> {
    return res.send("Hello From About Page");
});
function myHandler(req , res) {

} 
const myServer = http.createServer(app);

myServer.listen(8000 , () => console.log("Server Started!"));


