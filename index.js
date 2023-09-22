const express = require("express")
const connect = require("./db")
const student = require("./schema")
const app = express()
app.use(express.json())

app.get("/",async(req,res)=>{
   let data = await student.find()
    res.send(...data)
})
app.post("/post",async(req,res)=>{
    await student.create(req.body)
    res.send(req.body)
})

app.listen(8090,()=>{
    connect()
   console.log("Server Started 8090");
})