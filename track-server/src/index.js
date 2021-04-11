// Libraries
require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('../src/routes/authRoutes');
const bodyParser = require('body-parser');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express(); 

// Router
app.use(bodyParser.json())
app.use(authRoutes);
app.use(trackRoutes);

//Mongo Setup (I NEED TO HIDE THIS IMMEDIATLY)
const mongoUri = ''

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
app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
}); 

// Port
app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});

