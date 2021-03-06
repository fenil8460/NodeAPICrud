const express = require("express")
// const mongoose = require("");
require("./DB/connection")
const Student = require("./Models/students")
const app = express()
const port = process.env.PORT || 3000
app.use(express.json());

//create a new student && post API
// app.post("/students",(req,res)=>{
//     console.log(req.body)
//     const user = new Student(req.body)

//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
//     // res.send("hello from the other sides");
// })

app.post("/students",async(req,res)=>{
    try{
        const user = new Student(req.body)
        console.log(req.body)
        const createUser = await user.save()
        res.status(201).send(user);
    }catch(e){
        res.status(404 ).send(e);
    }
    // res.send("hello from the other sides");
})

//get data API
app.get("/students",async(req,res)=>{
    try{
        const studentsData = await Student.find()
        res.send(studentsData)
    }catch(e){
        res.send(e)
    }
})

//get data Using id or other field

app.get("/students/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const studentsData = await Student.findOne({phone:id})
        res.status(201).send(studentsData)
    }catch(e){
        res.status(404).send(e)
    }
})

//delete api data
app.delete("/students/:id",async(req,res)=>{
    try{
        const id = req.params.id;
    const deletestudent = await Student.findByIdAndDelete(req.params.id);
    if(!id){
        res.status(400).send();
    }else{
        res.status(201).send(deletestudent);
    }
    }catch(e){

    }
})

//update pi data
app.put("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
    const updatedata = await Student.findByIdAndUpdate(_id,req.body);
    if(!_id){
        res.status(400).send();
    }else{
        res.status(201).send(updatedata);
    }
    }catch(e){

    }
})

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`)
})
