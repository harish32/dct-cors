const Log = require("./Log")
const logger = async (req,res,next)=>{
    const ip = `${req.ip}-${req.method}-${req.url}`
    if(req.url!=="/favicon.ico"){
        const ob = new Log({log:ip})
        await ob.save()
    }
    next()
}

module.exports = logger