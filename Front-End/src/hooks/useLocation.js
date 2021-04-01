import {useState, useEffect} from 'react';

import {
    Accuracy, 
    requestPermissionAsync,
    watchPositionAsync
} from 'expo-location';

export default (callback) => {
    const [err, setErr] = useState(null);

    //Here we'll start recording user activity
    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                callback
            );
        } catch (e) {
            setErr(e);
        };
    };
    useEffect(() => {
        startWatching();
    }, []);

    return [err];
};