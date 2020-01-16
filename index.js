const express = require("express")
const app = express()
const axios = require("axios")
const cors = require("cors")
const dotenv = require("dotenv")
const logger = require("./logmiddleware")
const dbconnect = require("./db")

dotenv.config({path:"./config.env"})

app.set('trust proxy', true)

dbconnect()

app.use(cors())
app.use(logger)


app.get("*",async (req,res)=>{
    try{
        const data = await axios.get(req.url.slice(1))
        res.status(200).json(data.data)
    }catch(err){
        res.status(400).json(err.message)
    }
})



app.listen(process.env.PORT || 3000)