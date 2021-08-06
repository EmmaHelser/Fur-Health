import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Modal, Button, TextInput, TouchableOpacity} from 'react-native';
import UpdateDiet from './updateDiet.js';

const CareInstructions = (props) => {
  const [updateDiet, setDiet] = useState(false);

  const closeUpdateDiet = () => {
    setDiet(false);
  }

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
          <Text style={styles.title}>Care</Text>
          <View style={styles.sections}>
            <Text>Diet</Text>
            <TouchableOpacity onPress={() => setDiet(true)}>
              <Text>Update Diet</Text>
            </TouchableOpacity>
            <UpdateDiet show={updateDiet} close={closeUpdateDiet}/>
          </View>
          <View style={styles.sections}>
            <Text>Medications</Text>
            <Button title='Update Medications'/>
          </View>
          <View style={styles.sections}>
            <Text>Daily Routine</Text>
            <Button title='Update Routine'/>
          </View>
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
    backgroundColor: '#fff',
    height: '85%',
    width: 300,
    borderRadius: 5,
    borderColor: '#D0B6E1',
    borderWidth: 2
  },
  title: {
    fontSize: 30,
    alignItems: 'flex-start',
    marginBottom: 30,
    marginTop: 10,
    textDecorationLine: 'underline',
    textDecorationColor: '#8659A3'
  },
  sectionTitle: {
    fontSize: 20,
    alignSelf: 'center'
  },
  button: {
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  sections: {
    flexDirection: 'row',
    width: 260,
    height: '25%',
    marginBottom: 20,
    padding: '3%',
    justifyContent: 'space-between',
    backgroundColor: '#F7EDFE',
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    borderRightWidth: 2,
    borderRightColor: 'grey'
  },
})

export default CareInstructions;