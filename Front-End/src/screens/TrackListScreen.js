// Imports
import React, {useContext} from 'react';
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {NavigationEvents} from 'react-navigation';
import {Context as TrackContext} from '../context/TrackContext';
import {ListItem} from 'react-native-elements'; 


const TrackListScreen = ({navigation}) => {
  const {state, fetchTracks} = useContext(TrackContext);
  // Not fetching data
  console.log(state) ;



  return (
    <View>
    <NavigationEvents onWillFocus={fetchTracks}/>
      <Text style={{fontSize: 48}}>My Tracks</Text>

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
    </View>
  )
};
console.disableYellowBox = true;


const styles = StyleSheet.create({});

export default TrackListScreen;


// Don't know why but NavigationEvents is impacting app performance.  

// Chevron is a styling element >