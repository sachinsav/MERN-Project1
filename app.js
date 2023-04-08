const mongoose = require('mongoose')
const dotenv = require('dotenv')

const Route = require('./router/route')
const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors())

const hostname = "localhost";
const port = 3000;

dotenv.config({path:'./config.env'})
app.use(express.json())

// make connection
require('./db/conn')

//all routing related things

app.use(Route)



app.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})