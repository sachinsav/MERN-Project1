const jwt = require("jsonwebtoken")
const User = require("../models/user")

const Authenticate = async (req, res, next) => {
    try{
        const token = req.cookies.jwtoken
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)

        const user = await User.findOne({_id:verifyToken._id, "tokens.token": token})
        console.log("user detail")
        console.log(user)
        if(!user){ throw new Error("user not found")}

        req.token = token
        req.user = user
        req.userId = user._id
        next()

    }catch(err){
        res.status(401).json("Unathorized")
        console.log(err)
    }
}

module.exports = Authenticate