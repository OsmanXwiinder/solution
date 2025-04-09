const mongoose = require('mongoose')
require('dotenv').config()
const dbLink = process.env.dbLink
console.log(dbLink)


mongoose.connect(dbLink).then(() => console.log("Connected To Db "))