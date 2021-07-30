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
      <View>
        <Text>Update Diet</Text>
      </View>
    </Modal>
  )
}

export default UpdateDiet;