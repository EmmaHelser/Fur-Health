import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Modal} from 'react-native';

export default function AddVisit (props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.show}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalOn);
      }}
    >
      <View style={styles.container}>
        <View style={styles.button}>
            <Button title='Back' onPress={() => props.back()}/>
        </View>
        <Text style={styles.title}>Summary of Visit</Text>
        <View>
          <Text style={styles.inputLabel}>Reason for Visit:</Text>
          <TextInput style={styles.inputArea} placeholder='Shots'></TextInput>
        </View>
        <View>
          <Text style={styles.inputLabel}>Doctor:</Text>
          <TextInput style={styles.inputArea} placeholder='Dr. Hawk'></TextInput>
        </View>
        <View>
          <Text style={styles.inputLabel}>Visit Details:</Text>
          <TextInput style={styles.visitDetails} placeholder='Recieved yearly shots and a physical.' multiline={true}></TextInput>
        </View>
        <View>
          <Button title='Add Visit'/>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: '50%',
    backgroundColor: '#D0B6E1',
    height: '50%',
    width: '73%',
    borderWidth: 2,
    borderColor: '#F7EDFE',
    padding: '3%',
    borderRadius: 5
  },
  title: {
    fontSize: 30,
    textDecorationLine: 'underline',
    textDecorationColor: '#8659A3',
    alignSelf: 'center'
  },
  button: {
    alignSelf: 'flex-start'
  },
  inputLabel: {
    fontSize: 20,
    marginTop: 10
  },
  inputArea: {
    borderRadius: 5,
    width: 210,
    height: 40,
    textAlign: 'center',
    backgroundColor: '#F7EDFE'
  },
  visitDetails: {
    flexShrink: 1,
    flexWrap: 'wrap',
    borderRadius: 5,
    width: 210,
    height: 100,
    backgroundColor: '#F7EDFE',
    overflow: 'scroll'
  },
})