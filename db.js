const mongoose = require("mongoose")

const db = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology: true,useNewUrlParser: true})
        console.log("connected")
    }catch(err){
        console.log(err)
    }
}

module.exports = db