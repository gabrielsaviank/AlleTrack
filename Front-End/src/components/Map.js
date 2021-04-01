import React, {useContext} from 'react';
import {
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';

//Application Imports
import {Context as LocationContext} from '../context/LocationContext';


//Component
const Map = () => {
    const {
        state: { currentLocation }
    } = useContext(LocationContext);
    
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }
    
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
            <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgba(158, 158, 255, 1.0"
                fillColor="rgba(227, 18, 28, 0.8)"
            />
        </MapView>
    );
};

//Style
const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;