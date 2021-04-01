// Imports
import React, {useEffect, useContext} from 'react';
import { Context as AuthContext} from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const {tryLocalSignin} = useContext(AuthContext);

    //===>CheckAsync<===//
    useEffect(() => {
        tryLocalSignin();
    }, []);
  
    return null;
};

export default ResolveAuthScreen;