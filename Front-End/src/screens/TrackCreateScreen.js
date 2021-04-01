//Standard Imports
import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text} from 'react-native-elements';



//Application Imports
import Map from '../components/Map';
import '../_mockLocation';
import{Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';


//Component
const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext);
  const [err] = useLocation(addLocation);

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
