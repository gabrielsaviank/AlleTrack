//Standard Imports
import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text} from 'react-native-elements';
import {
  requestPermissionsAsync, 
  watchPositionAsync, 
  Accuracy
} from 'expo-location';


//Application Imports
import Map from '../components/Map';
import '../_mockLocation';
import{Context as LocationContext} from '../context/LocationContext'


//Component
const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext);
  const [err, setErr] = useState(null);

  //Here we'll start recording user activity
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        addLocation(location);
      })

    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Create a Track</Text>
      <Map/>
      {err ? <Text>Please Enable your location services.</Text> : null}
    </SafeAreaView>
  )
};

//Styles
const styles = StyleSheet.create({});

export default TrackCreateScreen;
