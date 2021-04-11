//Libs
const express = require('express');
const mongoose = require('mongoose');

// Application Imports
const requireAuth = require('../middlewares/requireAuth');

// This allows us to create multiple tracks
const Track = mongoose.model('Track');

// Our Router
const router = express.Router();

//Require authentication
router.use(requireAuth);

// Fetching different tracks
router.get('/tracks', async (req, res) => {

    const tracks = await Track.find({ userId: req.user._id});

    res.send(tracks); 
});

//Posting Tracks
router.post('/tracks', async (req, res) => {
    const {name, locations} = req.body;
    if (!name || !locations){
        return res
            .status(422)
            .send({error: "You must provide a name and locations."})

    }

    try {
        const track = new Track({name, locations, userId: req.user._id });
        await track.save();
        res.send(track);
    } catch (err) {
        res.status(422).send({error: err.message});
    }
});

module.exports = router;