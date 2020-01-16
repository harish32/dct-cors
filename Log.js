const mongoose = require("mongoose")

const logSchema = new mongoose.Schema({
    log:"string"
})
const Log = mongoose.model("Log",logSchema)

module.exports = Log