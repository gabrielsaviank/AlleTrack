//Imports
import {AsyncStorage} from 'react-native'
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

// Reducers
const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
            case 'signup':
                return{ errorMessage: '', token, token: action.payload};
        default: 
            return state;
    };
};

//SignUp
const signup = dispatch => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.getItem('token');
            dispatch({type: 'signup', payload: response.data.token });
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with signup' })
        }
    };
};

//SignIn 
const signin = (dispatch) => {
    return (email, password) => {
        //try to sign in 
        //Handle success by updating state
        //Handle failure by showing error message (somehow)
    };
};

//SignOut
const signout = (dispatch) => {
    return () => {
        // somehow sign out!
    };
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {token: null, errorMessage: ''}
);

