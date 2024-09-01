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
app.listen(8000, () => console.log("Server Started!"));

# Express makes code easier and clean so that user can read and understand 
  in case of about we can use (`hello ${req.query.name}`);
  so that it will give the search part of the user and print it .

// This is the demo for edit the git desktop
