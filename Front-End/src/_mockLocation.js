//ATTENTION THIS IS FOR GENERATING FAKE LOCATIONS, when deploy remove this file

import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return{ 
        timestamp: 10000000, 
        cords: {
            speed: 0, 
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5, 
            longitude: -27.0764221 + increment * tenMetersWithDegrees,
            latitude: -52.6163646 + increment * tenMetersWithDegrees


        }
    }
};

// Counter Start
let counter = 0; 

/*This was kinda tricky to do. */
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter ++;
}, 1000)