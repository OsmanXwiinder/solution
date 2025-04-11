const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.port

const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

app.use(express.json());
app.use('/user',userRouter);
app.use('/task',taskRouter);        




app.listen(port, () => console.log(`Server started on ${port}`))









