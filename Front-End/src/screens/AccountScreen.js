// Components
import React, {useContext} from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';


// Component
const AccountScreen = () => {
  const {signout} = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
        <ImageBackground source={require('../backgrounds/electrWaterBackground.png')} style={styles.background}>
        <Text style={{ fontSize: 48, textAlign: 'center' }}>AccountScreen</Text>
        <View style={styles.container}>
          <Button title="Sign Out" onPress={signout} style={{marginTop: 14}}/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
};

// Styling
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

export default AccountScreen;
