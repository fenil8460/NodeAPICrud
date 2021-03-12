const express = require("express")
// const mongoose = require("");
const app = express()
const port = process.env.PORT || 3000

//create a new student

app.post("/students",(req,res)=>{
    res.send("hello from the other sides");
})

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`)
})