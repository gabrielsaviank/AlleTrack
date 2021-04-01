import createDataContext from './createDataContext';

//Reducer
const locationReducer = (state, action) => {
    switch(action.type) {
        case 'add_current_location':
            return {...state, currentLocation: action.payload}
        default: 
            return state
    }
};

//Record Location
const startRecording = (dispatch) => () => {

};


//Stop Recording Location
const stopRecording = (dispatch) => () => {

};


// Add Location 
const addLocation = (dispatch) => (location) => {
    dispatch({type: 'add_current_location', payload: location});
};


//exporting 
export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation},
    {recording: false, locations: [], currentLocation: null}
);