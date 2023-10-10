const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const mongoose = require("mongoose")
const morgan = require("morgan")
require("dotenv").config()

const {registerController, loginController} = require("./src/controllers/auth.controller")
const {verifyJWT} = require("./src/middleware")

const app = express();
const port = process.env.PORT
const mongodbUrl = process.env.MONGODB_URL

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log("MongoDB connected successfully");
    })
    .catch((err)=>{
        console.error("Something went wrong while connecting to the database: ", err)
    })

app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())


app.get("/profile", verifyJWT)
app.post("/login", loginController)
app.post("/register", registerController)



app.listen(port, ()=>{
    console.log(`server is running in http://localhost:${port}`)
})
