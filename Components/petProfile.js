import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import axios from 'axios';
import WeightTracker from './ProfileComponents/weightTracker.js';

const PetProfile = (props) => {

  useEffect(() => {
    function completePetInfo() {
      axios.get(`http://10.0.0.240:3000/getPetInfo/${props.user}/${props.pet.pet_name}`)
        .than(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [])

  return (
    <View>
      <Text>{props.pet.pet_name}</Text>

    </View>
  );
}

export default PetProfile;