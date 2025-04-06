const mongoose = require('mongoose');
const env = require('dotenv').config()
const dbLink = process.env.DB_link;
console.log(dbLink)
mongoose.connect(dbLink)
.then(() => console.log("Connected To DB"))