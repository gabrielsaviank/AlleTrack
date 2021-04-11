import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {SafeAreaView} from 'react-navigation'
import {Context as TrackContext} from '../context/TrackContext';

const TrackDetailScreen = ({navigation}) => {
  const {state} = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(t => t._id === _id);


  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={{ fontSize: 48 }}>
        {track.name}
      </Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
