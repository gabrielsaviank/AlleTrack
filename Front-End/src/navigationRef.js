// This our navigation Actions where you determine actions for the navigator when authenticated
import {naviationActions, NavigationActions} from 'react-navigation';

//Let will persist the navigator settings aka you cannot change this later or assign another value
let navigator;


export const setNavigator = (nav) => {
    navigator = nav;
};

//Exporting navigator with actions 
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params
        })
    );
};