const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.port

const userRouter = require('./routes/user')


app.use(express.json());
app.use('/user',userRouter);
// app.use('./task',)        




app.listen(port, () => console.log(`Server started on ${port}`))









