import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  // Here we call our current locations (the pointer)
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);


  // If the currentLocation is null don't show anything (Activity === spinner)
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  };


  var initialLocation = {
    longitude: -52.6161812,
    latitude: -27.0782156,
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(227, 57, 0, 1.0)"
        fillColor="rgba(227, 57, 0, 0.3)"
      />

      <Polyline coordinates={locations.map(loc => loc.coords)}/>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;