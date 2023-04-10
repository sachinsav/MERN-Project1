const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")
userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phone:{
        type:Number,
        required: true
    },
    work:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    cpassword:{
        type:String,
        required: true
    },
    tokens:[
        {
            token:{
                type:String,
                required: true
            }
        }
    ],
    comments:[
        {
            name:{
                type:String,
                required: true
            },
            email:{
                type:String,
                required: true
            },
            subject:{
                type:String,
                required: true
            },
            msg:{
                type:String,
                required: true
            },
        }
    ]
})

userSchema.pre('save', async function(next){
    
    if(this.isModified('password')){
        this.password = await bcryptjs.hash(this.password, 12)
        this.cpassword = await bcryptjs.hash(this.cpassword, 12)
        
    }
    next()
})
userSchema.methods.generateAuthToken = async function() {
    try{
        const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token: token})
        await this.save()
        return token
    }catch(e){
        console.log(e)
    }

}
userSchema.methods.addComment = async function({name, email, subject, msg}) {
    try {
        console.log("addcomment inside")
        this.comments = this.comments.concat({name, email, subject, msg})
        await this.save()
        return this.comments
    } catch (error) {
        console.log(error)
        console.log("in error")
    }
}
const User = mongoose.model("User",userSchema)

module.exports = User


