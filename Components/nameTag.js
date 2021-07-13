import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function NameTage(props) {
  return (
    <Pressable style={styles.container} onPress={() => props.viewProfile(props.pet)}>
      <Text style={styles.name}>{props.pet.pet_name}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>Age: {props.pet.age}</Text>
        <Text>Gender: {props.pet.pet_gender}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
    width: 250,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    borderRightWidth: 2,
    borderRightColor: 'grey',
    backgroundColor: '#F7EDFE',
    padding: 5,
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