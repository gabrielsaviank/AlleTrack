// All about Saving and retrieving existing tracks from our API.

import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
    //Reducer 
    switch (action.type) {
        default:
          return state;
    }
};

//Get Our Tracks 
const fetchTracks = dispatch => () => {

};

const createTrack = dispatch => (name, locations) => {
    // make a request to our api
    console.log(name, locations.length);
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);


