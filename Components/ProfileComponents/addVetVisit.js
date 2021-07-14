import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Modal} from 'react-native';
import axios from 'axios';

export default function AddVisit (props) {
  const [visitReason, setVisitReason] = useState('');
  const [doctor, setDoctor] = useState('');
  const [visitNotes, setVisitNotes] = useState('');

  const visitSummary = {
    reason: visitReason,
    doctor: doctor,
    notes: visitNotes
  }

  async function addVisit(newVisit) {
    let visit = await newVisit;

    const option = {
      method: 'post',
      url: (`http://127.0.0.1:3001/addVetVisits/${props.petID}`),
      data: visit
    }
    axios(option)
      .then(response => {
        props.addVisit();
        console.log('Visit added!')
      })
      .catch(err => {
        console.log(err);
      })
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
        <Text style={styles.title}>Summary of Visit</Text>
        <View>
          <Text style={styles.inputLabel}>Reason for Visit:</Text>
          <TextInput style={styles.inputArea} placeholder='Shots' value={visitReason} onChangeText={reason => setVisitReason(reason)}></TextInput>
        </View>
        <View>
          <Text style={styles.inputLabel}>Doctor:</Text>
          <TextInput style={styles.inputArea} placeholder='Dr. Hawk' value={doctor} onChangeText={visitDoctor => setDoctor(visitDoctor)}></TextInput>
        </View>
        <View>
          <Text style={styles.inputLabel}>Visit Details:</Text>
          <TextInput style={styles.visitDetails} placeholder='Recieved yearly shots and a physical.' multiline={true} value={visitNotes} onChangeText={notes => setVisitNotes(notes)}></TextInput>
        </View>
        <View>
          <Button title='Add Visit' onPress={() => addVisit(visitSummary)}/>
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