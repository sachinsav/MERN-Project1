const express = require('express')

const route = express.Router()

route.get("/",(req,res)=>{
    res.send("This is the Home page.")
})

route.get("/about",(req,res)=>{
    res.send("This is the About page.")
})

route.get("/signin",(req,res)=>{
    res.send("This is the Signin page.")
})
route.get("/signup",(req,res)=>{
    res.send("This is the Signup page.")
})

route.post('/register',(req,res)=>{
    console.log(req.body)
    res.send({msg:"Okay"})
})


module.exports = route