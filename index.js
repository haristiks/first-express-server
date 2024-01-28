const express = require("express");
const app = express();
const path= require("path")

app.get("/",(req,res)=>{
    res.status(200)
    res.sendFile(path.join(__dirname, "home.html"))
})

app.get("/contacts",(req,res)=>{
    res.status(200)
    res.send("<h1>Contacts<h1/>")
})

app.get("*",(req,res)=>{
    res.status(404)
    res.send("<h1>404<h1/>")
})

//.....

app.listen(3000,()=>{
    console.log("server running on port 3000");
})