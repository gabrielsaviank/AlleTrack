import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

//Component
const Map = () => {
let points = [];
for (let index = 0; index < 20.; index++) {
    if (index % 2 === 0) {
        points.push({
            latitude: 37.33233 + index * 0.001,
            longitude: -122.03121 + index * 0.001
        })
    } else {
        points.push({
            latitude: 37.33233 - index * 0.002,
            longitude: -122.03121 + index * 0.001
        })
    }
    
}
return (
    <MapView 
        style={styles.map}
        initialRegion={{
            latitude: 37.33233,
            longitude: -122.03121,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
    >
        <Polyline coordinates={points}/>
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