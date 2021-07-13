import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';

const CareInstructions = (props) => {
  return (
    <View>
      <View>
        <Text style={styles.sectionTitle}>Care Instructions</Text>
      </View>
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
            <Button title='Back' onPress={() => props.close()}/>
          </View>
          <Text>Diet</Text>
          <Text>Medications</Text>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '15%',
    marginHorizontal: 50,
    backgroundColor: '#D0B6E1',
    height: '85%',
    width: 300,
    borderRadius: 5
  },
  sectionTitle: {
    fontSize: 20,
    alignSelf: 'center'
  },
  button: {
    alignSelf: 'flex-start',
    marginLeft: 10
  },
})

export default CareInstructions;