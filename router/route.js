const express = require('express')
const User = require('../models/user')

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

//promises
/*
route.post('/register',(req,res)=>{
    
    const {name, email, phone, work, password, cpassword} = req.body
    if(!name || !email || !phone || !work || !password || !cpassword){
            return res.status(422).json({msg:"Please fill all the form fields"})
    }
    
    User.findOne({email:email}).then((userExist)=>{
        if(userExist){
            return res.status(422).json({msg:"User already exist, please enter some other email address"})
        }
        const user = new User({name, email, phone, work, password, cpassword})
        user.save().then(()=>{
            return res.status(200).json({msg:"User got registered successfully"})
        }).catch((err)=>{
            return res.status(500).json({msg:"Failed to registered"})
        })

    }).catch((e)=>{
        console.log(e)
        return res.status(500).json({msg:"Some error occured"})
    })
})
*/
route.post('/register', async (req, res)=>{
    console.log("Async started..")
    const {name, email, phone, work, password, cpassword} = req.body
    if(!name || !email || !phone || !work || !password || !cpassword){
            return res.status(422).json({msg:"Please fill all the form fields"})
    }
    try{
    const userExist = await User.findOne({email:email})
    if(userExist){
        return res.status(422).json({msg:"User already exist, please use a different email id"})
    }

    const user = new User({name, email, phone, work, password, cpassword})
    await user.save()
    res.status(200).json("User registered successfully")

    }catch(e){
        console.log(e)
        res.status(500).json({msg:e})
    }


})


module.exports = route