// dct cors 
const express = require("express")
const app = express()
const axios = require("axios")
const cors = require("cors")

app.use(cors())

app.get("*",async (req,res)=>{
    try{
        const data = await axios.get(req.url.slice(1))
        res.status(200).json(data.data)
    }catch(err){
        res.status(400).json(err.message)
    }
})



app.listen(3000)
