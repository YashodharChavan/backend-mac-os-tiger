const express = require('express')

const app = express();
app.use(express.json())

app.get('/api/data', (req, res) => {
    res.json({ msg: 'Hello from backend' });
});

app.listen(3000, ()=> {
    console.log("app is active")
})
