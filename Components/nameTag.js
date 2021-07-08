import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NameTage(props) {
  return (
    <View>
      <Text>{props.pet.pet_name}</Text>
      <Text>{props.pet.age}</Text>
      <Text>{props.pet.pet_weight}</Text>
    </View>
  )
}