const express = require('express');
const path = require('path');
const app = express();

const members = require('./Members')
const logger = require('./middleware/logger')

const PORT = process.env.process || 5000;
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/members', require('./Routes/api/members')); 


app.use(express.static(path.join(__dirname,'Public')))

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
