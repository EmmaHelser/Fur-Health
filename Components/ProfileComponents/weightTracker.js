import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Pressable, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import WeighIn from './weighIns.js';
import AddGoals from './addWeightGoals.js';

export default function WeightTracker (props) {
  const [weightGoal, setWeightGoal] = useState('');
  const [goalWeight, setGoalWeight] = useState(props.goal);
  const [weightStatus, setWeightStatus] = useState('');
  const [pastWeights, setPastWeights] = useState([]);
  const [showGoals, setShowGoals] = useState(false);
  const [newWeight, setNewWeight] = useState('');

  useEffect(() => {
    getPastWeights()
    setWeightGoal(props.pet.weight_goal);
    setGoalWeight(props.pet.goal_weight);
    setWeightStatus(props.pet.weight_status);
  }, [props.show])

  useEffect(() => {
    getPastWeights()
  }, [newWeight])

  useEffect(() => {
    setGoalWeight(props.pet.goal_weight);
  }, [])

  const getPastWeights = () => {
    axios.get(`http://127.0.0.1:3001/getWeights/${props.petID}`)
    .then(response => {
      setPastWeights(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const addNewWeight = (weight) => {
    const option = {
      'method': 'post',
      'url': `http://127.0.0.1:3001/addWeight/${props.petID}`,
      'data': {
        newWeight: weight
      }
    }
    axios(option)
      .then(response => {
        console.log(response.data);
        setNewWeight('');
      })
      .catch(err => {
        console.log(err);
      })
  }

  const closeGoals = (newGoals) => {
    setShowGoals(false);
    setWeightGoal(newGoals.weightGoal);
    setGoalWeight(newGoals.goalWeight);
    setWeightStatus(newGoals.status);
  }

  const closeGoalsNoChange = () => {
    setShowGoals(false);
  }

  return (
    <View>
      <View>
        <Text style={styles.sectionTitle}>Weight Tracker</Text>
        <View style={styles.infoSection}>
          <Text>Current Weight: {props.pet.pet_weight}</Text>
          <Text>Goal: {goalWeight}</Text>
        </View>
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
          <Text style={styles.title}>Weight Tracker</Text>
          <View style={styles.overview}>
            <View style={styles.goals}>
              <Text style={styles.goalText}>Weight Goal: </Text>
              <Text style={styles.currentGoal}>{weightGoal}</Text>
              <Text style={styles.goalText}>Goal Weight: </Text>
              <Text style={styles.currentGoal}>{goalWeight}</Text>
              <Text style={styles.goalText}>Status: </Text>
              <Text style={styles.currentGoal}>{weightStatus}</Text>
              <AddGoals close={closeGoals} show={showGoals} petID={props.petID} back={closeGoalsNoChange}/>
              <TouchableOpacity onPress={() => setShowGoals(true)}>
                <Text style={styles.addGoals}>Add Goals</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.chart}>
              <Text>Chart</Text>
            </View>
          </View>
          <View style={styles.add}>
            <TextInput
              placeholder='12lb'
              onChangeText={newWeight => setNewWeight(newWeight)}
              defaultValue={newWeight}
            ></TextInput>
            <TouchableOpacity onPress={() => addNewWeight(newWeight)}>
              <Text>Add Weight</Text>
            </TouchableOpacity>
          </View>
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
    marginTop: '15%',
    marginHorizontal: 50,
    backgroundColor: '#fff',
    height: '85%',
    width: 300,
    borderRadius: 5,
    borderColor: '#D0B6E1',
    borderWidth: 2
  },
  weightsList: {
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5
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
    alignSelf: 'center',
    marginBottom: 5
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  add: {
    backgroundColor: '#F7EDFE',
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    borderRightWidth: 2,
    borderRightColor: 'grey',
    width: 260,
    height: 37,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignItems:'center',
    padding: 7
  },
  overview: {
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
  button: {
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  goals: {
    width: '35%'
  },
  goalText: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold'
  },
  addGoals: {
    marginTop: 15,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderBottomColor: 'grey',
    borderRightColor: 'grey',
    color: '#067ee3'
  },
  currentGoal: {
    fontSize: 12
  },
  chart: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 2,
    width: '65%',
    marginLeft: '1%',
    height: '95%'
  }
})