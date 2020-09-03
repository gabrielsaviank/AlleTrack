import createDataContext from './createDataContext';


const authReducer = () => {
    switch(action.type) {
        default: 
            return state;
    }
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {},
    {isSignedIn: false}
);

