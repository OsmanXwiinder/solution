const express = require('express');
const app = express();
const  bodyParser = require('body-parser')



const AdminRoute = require('./routes/admin')
// const UserRoute = require('./routes/user')


app.use(bodyParser.json());
app.use('/admin', AdminRoute);
// app.use('/user', UserRoute);



const port = 3000;

app.listen(port, () => console.log("Server started"));

