import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Pressable, StyleSheet, Button, TextInput} from 'react-native';
import axios from 'axios';
import WeighIn from './weighIns.js';
import AddGoals from './addWeightGoals.js';

export default function WeightTracker (props) {
  const [weightGoal, setWeightGoal] = useState('');
  const [pastWeights, setPastWeights] = useState([]);
  const [showGoals, setShowGoals] = useState(false);

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

  const closeGoals = () => {
    setShowGoals(false);
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
          <Button title='Back' onPress={() => props.close()}/>
          <Text style={styles.title}>Weight Tracker</Text>
          <View style={styles.overview}>
            <View>
              <Text>Goals</Text>
              <AddGoals close={closeGoals} show={showGoals} petID={props.petID}/>
              <Button title='Add Goals' onPress={() => setShowGoals(true)}/>
            </View>
            <View>
              <Text>Graph</Text>
            </View>
          </View>
          <Text style={styles.add}>Add Weight</Text>
          <TextInput></TextInput>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '10%',
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
  },
  add: {
    borderWidth: 3,
    width: 300,
    height: 37,
    textAlign: 'center',
    padding: 7
  },
  overview: {
    flexDirection: 'row',
    width: 300,
    height: '25%',
    margin: 10,
    padding: '3%',
    justifyContent: 'space-between',
    borderWidth: 3
  }
})