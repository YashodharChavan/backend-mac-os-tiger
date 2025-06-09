const express = require('express')
require('dotenv').config();

const app = express();
app.use(express.json()) 
const emailUser = process.env.EMAIL_USER;
const emailAPI = process.env.EMAIL_API;


console.log(emailUser, emailAPI)

app.get('/api/data', (req, res) => {
    res.json({ msg: 'Hello from backend' });
});

app.listen(3000, ()=> {
    console.log("app is active")
})
