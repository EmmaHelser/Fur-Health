import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Modal, Button, TextInput} from 'react-native';

const UpdateDiet = (props) => {
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
        <Text>Update Diet</Text>
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
    height: '45%',
    width: '73%',
    // borderWidth: 2,
    // borderColor: '#F7EDFE',
    padding: '3%',
    borderRadius: 5
  },
})

export default UpdateDiet;