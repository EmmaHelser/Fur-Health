import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import axios from 'axios';
import WeightTracker from './ProfileComponents/weightTracker.js';

const PetProfile = (props) => {

  useEffect(() => {
    function completePetInfo() {
      axios.get(`http://127.0.0.1:3000/getPetInfo/${props.user}&${props.pet.pet_name}`)
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        })
    }

    completePetInfo()
  }, [])

  return (
    <View>
      <Text>{props.pet.pet_name}</Text>
      <WeightTracker pet={props.pet.pet_name}/>
      <Text>Food</Text>
      <Text>Exercise</Text>
      <Text>Vet Visits</Text>
    </View>
  );
}

export default PetProfile;