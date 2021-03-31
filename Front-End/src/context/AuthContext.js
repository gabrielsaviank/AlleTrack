import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  // REDUCER
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return {errorMessage: '', token: action.payload}
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    default:
      return state;
  }
};

//Clearing error messages(new syntax)
const clearErrorMessage = (dispatch) => () => {
  dispatch({
    type: 'clear_error_message',
  });
};

// const clearErrorMessage = (dispatch) => {
//   dispatch({typ: 'clear_error_message'});
// };

// Signup
const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token});

    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    });
  }
};

// SignIn
const signin = dispatch => async({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signin', payload: response.data.token});
    navigate('TrackList');
  } catch (error) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    });
  }
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
};

// Destroy Session
const signout = dispatch => {
  return () => {
    // somehow sign out!!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage},
  { token: null, errorMessage: '' }
);
