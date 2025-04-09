const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.port
// console.log(port)

app.use(express.json());





app.listen(port, () => console.log(`Server started on ${port}`))









