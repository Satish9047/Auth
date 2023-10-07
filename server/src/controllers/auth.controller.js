const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
const secret = process.env.JWT_SECRET
const saltRounds = 8

const registerController = async (req, res)=>{
    console.log(req.body)
    const {email, userName, password} = req.body

    try {
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({err: "User Already exist"});
        }

        bcrypt.hash(password, saltRounds)
            .then((hash)=>{
                const newUser = new User({
                    email,
                    userName,
                    password: hash
                })
                newUser.save();
                res.status(201).json({success: `User has been created ! ${email}`})
            })
            .catch((err)=>{
                console.log(" something went wrong: ", err);
                res.status(401).json({err: "something went wrong"})
            })


    } catch (error) {
        console.error("something went wrong: ", error)
        return res.status(401).json({err: "something went wrong"});
    }
    
}

const loginController = (req, res)=>{
    console.log(req.body)
}


module.exports = {
    registerController,
    loginController
}