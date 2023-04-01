const mongoose = require('mongoose')

const uri = process.env.URI

mongoose.connect(uri).then(()=>{
    console.log('connection successfull')
}).catch((e)=>{
    console.log(e)
})