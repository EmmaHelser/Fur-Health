import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import formatDate from '../helpers.js';

export default function WeighIn (props) {
  const date = formatDate(props.weight.weigh_date);

  return (
    <View style={styles.container}>
      <Text style={styles.weight}>{props.weight.pet_weight}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 260,
    justifyContent: 'space-between',
    padding: '2%',
    backgroundColor: '#F7EDFE',
    borderRadius: 5
  }
})