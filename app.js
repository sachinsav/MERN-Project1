express = require('express')
const mongoose = require('mongoose')

const app = express();
const hostname = "127.0.0.1";
const port = 8888;


const pwd = encodeURIComponent("MONGO@123");
const uri = `mongodb+srv://sachin954:${pwd}@cluster0.iw6lrmo.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri).then(()=>{
    console.log("connection successfull")
}).catch(()=>{
    console.log("got some error");
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