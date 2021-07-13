import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import formatDate from '../helpers.js';

export default function WeighIn (props) {
  const date = formatDate(props.date);

  return (
    <View style={styles.container}>
      <Text>{props.reason}</Text>
      <Text>{date}</Text>
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
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    borderRightWidth: 2,
    borderRightColor: 'grey',
    margin: 10
  }
})