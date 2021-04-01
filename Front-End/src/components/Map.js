import React, {useContext} from 'react';
import {
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

//Application Imports
import {Context as LocationContext} from '../context/LocationContext';


//Component
const Map = () => {
    const {state: {currentLocation}} = useContext(LocationContext);

    if (!currentLocation ) {
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>
    }

    console.log(state)
    return (
        <MapView 
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
        </MapView>
    )
};

//Style
const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;