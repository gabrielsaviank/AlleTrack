// Imports
import React, {useContext} from 'react';
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {NavigationEvents} from 'react-navigation';
import {Context as TrackContext} from '../context/TrackContext';
import {ListItem} from 'react-native-elements'; 


const TrackListScreen = ({navigation}) => {
  // Hook
  const {state, fetchTracks} = useContext(TrackContext);
  console.log(state);

  //JSX
  return (
    <View>
      <ImageBackground source={require('../backgrounds/electrWaterBackground.png')}style={styles.background}>
        <NavigationEvents onWillFocus={fetchTracks}/>
        <Text style={{fontSize: 48, textAlign: 'center'}}>My Tracks</Text>

        <FlatList
          data={state}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id})}>
              <ListItem chevron title={item.name}/>
            </TouchableOpacity>
          }}
        />
        
        {/* <Button 
          title="Go to track detail"
          onPress={()=>{navigation.navigate('TrackDetail')}}
        /> */}
      </ImageBackground>
    </View>
  )
};
console.disableYellowBox = true;


const styles = StyleSheet.create({
  background: {
    height: 800, 
    width: 400
  }
});

export default TrackListScreen;


// Don't know why but NavigationEvents is impacting app performance.  

// Chevron is a styling element >