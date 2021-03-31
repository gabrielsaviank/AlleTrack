//Standard Imports
import React from 'react';
import { StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text} from 'react-native-elements';

//Application Imports
import Map from '../components/Map';

//Component
const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Create a Track</Text>
      <Map/>
    </SafeAreaView>
  )
};

//Styles
const styles = StyleSheet.create({});

export default TrackCreateScreen;
