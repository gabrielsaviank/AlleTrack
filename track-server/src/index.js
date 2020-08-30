// Libraries
require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('../src/routes/authRoutes');
const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.json())
app.use(authRoutes);

//Mongo Setup 
const mongoUri = 'mongodb+srv://admin:7758773S@cluster0.vx10q.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', ()=>{
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err)=>{
    console.error('Error connecting to mongo', err)
});

// Req and Res
app.get('/', (req, res) => {
    res.send('Hi there')
}); 
// Port
app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});

