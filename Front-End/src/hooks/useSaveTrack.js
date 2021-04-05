//Imports 
import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';

//Pulling some information rom our location, we're going to pull the action  from track context and throw to location context
export default () => {
    const { createTrack } = useContext(TrackContext);
    const {
      state: { locations, name }
    } = useContext(LocationContext);
  
    const saveTrack = () => {
      createTrack(name, locations);
    };
  
    return [saveTrack];
};