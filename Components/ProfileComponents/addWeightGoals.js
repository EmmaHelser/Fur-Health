import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Picker, StyleSheet, Button, TextInput, button} from 'react-native';
import axios from 'axios';

export default function AddGoals (props) {
  const [weightGoal, setWeightGoal] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [status, setStatus] = useState('');

  const updateGoals = (newGoals) => {
    const option = {
      'method': 'patch',
      "url": `http://127.0.0.1:3001/updateGoals/${props.petID}`,
      "data": newGoals
    }
    axios(option)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const goals = {
    weightGoal: weightGoal,
    goalWeight: goalWeight,
    status: status
  }

  async function close () {
    let newGoals = await goals;
    updateGoals(newGoals);
    props.close(newGoals);
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
        <View style={styles.button}>
            <Button title='Back' onPress={() => props.back()}/>
        </View>
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
        <TextInput
          style={styles.inputArea}
          placeholder='10.5lb'
          onChangeText={weight => setGoalWeight(weight)}
          defaultValue={goalWeight}
        ></TextInput>
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
        <View style={styles.addButton}>
          <Button title='Add Goals' onPress={() => close()}/>
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
    backgroundColor: '#fff',
    height: '45%',
    width: '90%',
    padding: '3%',
    borderRadius: 5,
    borderColor: '#D0B6E1',
    borderWidth: 2
  },
  title: {
    fontSize: 30,
    textDecorationLine: 'underline',
    textDecorationColor: '#8659A3',
    alignSelf: 'center'
  },
  petSelector: {
    backgroundColor: '#F7EDFE',
    width: 240,
    height: 40,
    borderRadius: 5,
    marginVertical: 5
  },
  inputLabel: {
    fontSize: 20,
    marginTop: 10
  },
  inputArea: {
    borderRadius: 5,
    width: 240,
    height: 40,
    textAlign: 'center',
    backgroundColor: '#F7EDFE'
  },
  button: {
    alignSelf: 'flex-start'
  },
  addButton: {
    alignSelf: 'center'
  }
})