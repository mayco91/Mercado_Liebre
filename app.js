const express = require("express");
const app = express();
const path = require("path")

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.use(express.static("public"))



app.listen(5000,()=> {
    console.log("servidor corriendo en puerto 5000")
})