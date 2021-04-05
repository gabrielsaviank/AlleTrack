// All about tracking the users location and storing points

import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  //Reducer
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    case 'start_recording':
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    case 'add_location':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'change_name':
      return { ...state, name: action.payload };
    case 'reset': 
      return{...state, name: '', locations: []};
    default:
      return state;
  }
};

// Name our tracks 
const changeName = dispatch => name => {
  dispatch({ type: 'change_name', payload: name });
};

// Initiate our record
const startRecording = dispatch => () => {
  dispatch({ type: 'start_recording' });
};

// Stop our action
const stopRecording = dispatch => () => {
  dispatch({ type: 'stop_recording' });
};

// Creates the points of our location (this is our core)
const addLocation = dispatch => (location, recording) => {
  dispatch({ type: 'add_current_location', payload: location });
  if (recording) {
    dispatch({ type: 'add_location', payload: location });
  }
};

// This reset our layout to the initial state
const reset = dispatch => () => {
  dispatch({type: 'reset'});
};


export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  { name: '', recording: false, locations: [], currentLocation: null }
);