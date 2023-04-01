express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express();

const hostname = "127.0.0.1";
const port = 8888;


dotenv.config({path:'./config.env'})
const uri = process.env.uri

mongoose.connect(uri).then(()=>{
    console.log("connection successfull")
}).catch((e)=>{
    console.log(e);
})

app.get("/",(req,res)=>{
    res.send("This is the Home page.")
})

app.get("/about",(req,res)=>{
    res.send("This is the About page.")
})

app.get("/signin",(req,res)=>{
    res.send("This is the Signin page.")
})
app.get("/signup",(req,res)=>{
    res.send("This is the Signup page.")
})




app.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})