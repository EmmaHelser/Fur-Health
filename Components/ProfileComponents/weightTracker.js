import React, {useState, useEffect} from 'react';
import {View, Text, Modal} from 'react-native';
import axios from 'axios';
import WeighIn from './weighIns.js';

export default function WeightTracker (props) {
  const [modalOn, setModalOn] = useState(false);
  const [weightGoal, setWeightGoal] = useState('');
  const [pastWeights, setPastWeights] = useState([]);

  useEffect(() => {
    function getPastWeights() {
      axios.get(`http://10.0.0.240:3000/getWeights/:petID`)
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  })

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
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >

        {pastWeights.map(weight => <WeighIn weight={wieght}/>)}
      </Modal>
    </View>
  )

}