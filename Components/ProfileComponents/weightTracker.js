import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Pressable, StyleSheet, Button} from 'react-native';
import axios from 'axios';
import WeighIn from './weighIns.js';

export default function WeightTracker (props) {
  const [weightGoal, setWeightGoal] = useState('');
  const [pastWeights, setPastWeights] = useState([]);

  useEffect(() => {
    getPastWeights()
  }, [props.show])

  const getPastWeights = () => {
    axios.get(`http://127.0.0.1:3000/getWeights/${props.petID}`)
    .then(response => {
      console.log(response.data);
      setPastWeights(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <View>
      <View>
        <Text>Current Weight</Text>
        <Text>Weight Goals</Text>
        <Text>Goal Weight</Text>
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
          <Button title='Back to Pet Profile'/>
          <Text style={styles.title}>Weight Tracker</Text>
          <View style={styles.weightsList}>
            {pastWeights.map(weight => <WeighIn key={weight.weigh_date} weight={weight}/>)}
          </View>
        </View>
      </Modal>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 50,
    backgroundColor: '#F7EDFE',
    height: '100%',
    width: '100%'
  },
  weightsList: {
    justifyContent: 'center',
    margin: 10
  },
  title: {
    fontSize: 30,
    alignItems: 'flex-start',
    marginBottom: 50
  }
})