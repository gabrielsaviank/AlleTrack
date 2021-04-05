import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import {SafeAreaView} from 'react-navigation';

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize: 48}}>My Tacks</Text>
      
      <Button 
        title="Go to track detail"
        onPress={()=>{navigation.navigate('TrackDetail')}}
      />
    </View>
  )
};

const styles = StyleSheet.create({});

export default TrackListScreen;
