import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NameTage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.pet.pet_name}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>Age: {props.pet.age}</Text>
        <Text>Weight: {props.pet.pet_weight}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  detail: {
    marginRight: '10%'
  }
})