// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, ImageBackground, Button, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import {FontAwesome} from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
  // Each time location changes we add a new Location with a new object
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);

  // Here we have our hook previously mentioned in useLocation, locations will only work with recording
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );

  // Here we have our hook error if not we have our callback
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <ImageBackground source={require('../backgrounds/electrWaterBackground.png')}style={styles.background}>
        <Text h2>Create a Track</Text>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm />
      </ImageBackground>
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name='plus' size={20}/>
};

const styles = StyleSheet.create({
  background: {
    height: 800, 
    width: 400
  }, 
  container: {
    backgroundColor: 'grey',
    height: 65, 
    top: 640
  }
});

export default withNavigationFocus(TrackCreateScreen);