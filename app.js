const mongoose = require('mongoose')
const dotenv = require('dotenv')

const Route = require('./router/route')
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express();
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions))

const hostname = "localhost";
const port = 3000;

dotenv.config({path:'./config.env'})
app.use(express.json())
app.use(cookieParser())

// make connection
require('./db/conn')

//all routing related things

app.use(Route)



app.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})