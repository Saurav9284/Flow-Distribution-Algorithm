const mongoose = require('mongoose')
require('dotenv').config()

const connection = mongoose.connect(process.env.MONGO_URI)

const PORT = process.env.PORT

const JWT = process.env.JWT

module.exports = {connection,PORT,JWT}