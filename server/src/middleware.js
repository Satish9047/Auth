const jwt = require("jsonwebtoken")
const secret = process.env.JWT_SECRET

const verifyJWT = (req, res)=>{
    const token = req.headers.authorization
    if(!token){
        return res.status(400).json({err: "login first"})
    }
    if(!token.startsWith("Bearer ")){
        return res.status(400).json({err: "unauthorized user"})
    }
    const jwtToken = token.split(" ")[1]
    if(!jwtToken){
        console.log("no jwtToken found")
        return res.status(400).json({err: "unauthorized user"})
    }
    const validJWT = jwt.verify(jwtToken, secret)
    if(!validJWT){
        return res.status(400).json({err: "unauthorized user"})
    }else{
        res.status(200).json({success: "valid user"})
    }

}

module.exports = {
    verifyJWT
}