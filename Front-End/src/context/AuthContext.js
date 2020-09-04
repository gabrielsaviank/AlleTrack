import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = () => {
    switch(action.type) {
        default: 
            return state;
    }
};

//SignUp
const signup = dispatch => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email, password});
            console.log(response.data)
        } catch (err) {
            console.log(err.message)
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
    {isSignedIn: false}
);

