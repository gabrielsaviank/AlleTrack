// All about Saving and retrieving existing tracks from our API.

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';


const trackReducer = (state, action) => {
    //Reducer 
    switch (action.type) {
        case 'fetch_tracks': 
            return action.payload;
        default:
          return state;
    }
};

//Get Our Tracks 
const fetchTracks = dispatch => async() => {
    const response = await trackerApi.get('/tracks', {name, locations});
    dispatch ({type: 'fetch_tracks', payload: response.data});
};

const createTrack = dispatch => async(name, locations) => {
    await trackerApi.post('/tracks', {name, locations});
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);


