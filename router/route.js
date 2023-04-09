const express = require('express')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const Authenticate = require('../middleware/authenticate')
const route = express.Router()



route.get("/",(req,res)=>{
    res.send("This is the Home page.")
})

route.get("/about",Authenticate ,(req,res)=>{
    res.status(200).json(req.user)
})
route.get("/getData", Authenticate, (req,res)=>{
    res.status(200).json(req.user)
})

route.get("/signup", (req,res)=>{
    
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
    console.log("hello")
    console.log("Async started..")
    //res.set('Access-Control-Allow-Origin', 'http://localhost:3001/signup');
    
    const {name, email, phone, work, password, cpassword} = req.body

    if(!name || !email || !phone || !work || !password || !cpassword){
            return res.status(422).json({msg:"Please fill all the form fields"})
    }
    if(password!=cpassword){
        return res.status(422).json({msg:"Password and confirm password should be same"})
    }
    try{
    const userExist = await User.findOne({email:email})
    if(userExist){
        return res.status(422).json({msg:"User already exist, please use a different email id"})
    }

    const user = new User({name, email, phone, work, password, cpassword})
    await user.save()
    res.status(200)
    return res.json({msg:"User registered successfully"})

    }catch(e){
        console.log(e)
        res.status(500).json({msg:e})
    }


})

route.post('/signin',async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        return res.status(422).json({msg:"Please fill all field"})
    }
    try{
        const user = await User.findOne({email:email})
        if(!user){
            return res.status(422).json({msg:"User does not exist"})
        }
        const isMatch = await bcryptjs.compare(password, user.password)
        console.log(isMatch)
        console.log("Cooookie2")
        let token="";
        if(isMatch){
            token = await user.generateAuthToken()
            res.cookie("jwtoken",token,{
                expires: new Date(Date.now() + 5*60*1000),  
                httpOnly: true
            })
            console.log(token)
            return res.status(200).json({msg:"User logged in successfully", token:token})
        }else{
            return res.status(422).json({msg:"Invalid Credential"})
        }
    }catch(e){
        return res.status(400).json({msg:e})
    }

})


module.exports = route