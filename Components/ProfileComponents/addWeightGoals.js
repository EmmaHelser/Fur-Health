import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Picker, StyleSheet, Button, TextInput} from 'react-native';
import axios from 'axios';

export default function AddGoals (props) {
  const [weightGoal, setWeightGoal] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [status, setStatus] = useState('');

  const updateGoals = () => {
    const option = {
      'method': 'patch',
      "url": `http://127.0.0.1:3000/updateGoals/${props.petID}`,
      "data": {
        weightGoal: weightGoal,
        goalWeight: goalWeight,
        status: status
      }
    }
    axios(option)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const close = () => {
    updateGoals();
    props.close();
  }

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
        <Text style={styles.title}>Goals</Text>
        <Text style={styles.inputLabel}>Weight Goal</Text>
        <Picker
          itemStyle={styles.petSelector}
          selectedValue={weightGoal}
          onValueChange={selectedGoal => setWeightGoal(selectedGoal)}
        >
          <Picker.Item label='Select Goal' value='Select Goal'/>
          <Picker.Item label='Loose' value='Loose'/>
          <Picker.Item label='Gain' value='Gain'/>
          <Picker.Item label='Maintain' value='Maintain'/>
        </Picker>
        <TextInput style={styles.inputLabel}>Goal Weight</TextInput>
        <TextInput style={styles.inputArea}></TextInput>
        <Text style={styles.inputLabel}>Weight Status</Text>
        <Picker
          itemStyle={styles.petSelector}
          selectedValue={status}
          onValueChange={selectedStatus => setStatus(selectedStatus)}
        >
          <Picker.Item label='Select Weight Status' value='Select Weight Status'/>
          <Picker.Item label='Extreme Chonk' value='Extreme Chonk'/>
          <Picker.Item label='Chonk' value='Chonk'/>
          <Picker.Item label='Fine Kitton' value='Fine Kitton'/>
          <Picker.Item label='Needs Chonkin' value='Needs Chonkin'/>
          <Picker.Item label='Really Needs Chonkin' value='Really Needs Chonkin'/>
        </Picker>
        <Button title='Add Goals' color='#F7EDFE' onPress={() => close()}/>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '50%',
    backgroundColor: '#8659A3',
    height: '40%',
    width: '80%',
    borderWidth: 2,
    borderColor: '#F7EDFE',
    padding: '3%',
    borderRadius: 5
  },
  title: {
    fontSize: 30,
    textDecorationLine: 'underline',
    textDecorationColor: '#F7EDFE'
  },
  petSelector: {
    backgroundColor: '#F7EDFE',
    width: 210,
    height: 40,
    borderRadius: 5,
    margin: 10
  },
  inputLabel: {
    fontSize: 20
  },
  inputArea: {
    borderRadius: 5,
    width: 210,
    height: 40,
    textAlign: 'center',
    backgroundColor: '#F7EDFE'
  }
})