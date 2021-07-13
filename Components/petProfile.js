import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Pressable, Button} from 'react-native';
import axios from 'axios';
import WeightTracker from './ProfileComponents/weightTracker.js';
import CareInstructions from './ProfileComponents/careInstructions.js';
import Exercise from './ProfileComponents/exerciseLog.js';
import VetVisits from './ProfileComponents/vetVisits.js';

const PetProfile = (props) => {
  const [petInfo, setPetInfo] = useState({});
  const [showWeights, setShowWeights] = useState(false);
  const [showVet, setShowVet] = useState(false);
  const [showExercise, setShowExercise] = useState(false);
  const [showHealth, setShowHealth] = useState(false);

  useEffect(() => {
    function completePetInfo() {
      axios.get(`http://127.0.0.1:3001/getPetInfo/${props.user}&${props.pet.pet_name}`)
        .then(response => {
          console.log(response.data);
          setPetInfo(response.data[0]);
        })
        .catch(err => {
          console.log(err);
        })
    }

    completePetInfo()
  }, [])

  const closeSection = () => {
    setShowWeights(false);
    setShowHealth(false);
    setShowExercise(false);
    setShowVet(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Button title='Back' onPress={() => props.close()}/>
      </View>
      <Text style={styles.title}>{petInfo.pet_name}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.infoSection}>
          <View>
            <Text>Age: {petInfo.age} years</Text>
            <Text>Born: {petInfo.birthday}</Text>
          </View>
          <View>
            <Text>Gender: {petInfo.pet_gender}</Text>
            <Text>Breed: {petInfo.breed}</Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.section} onPress={() => setShowWeights(true)}>
        <WeightTracker pet={petInfo} petID={petInfo.id} show={showWeights} close={closeSection}/>
      </Pressable>
      <Pressable style={styles.section} onPress={() => setShowHealth(true)}>
        <CareInstructions show={showHealth} petID={petInfo.id} close={closeSection}/>
      </Pressable>
      <Pressable style={styles.section} onPress={() => setShowExercise(true)}>
        <Exercise show={showExercise} petID={petInfo.id} close={closeSection}/>
      </Pressable>
      <Pressable style={styles.section} onPress={() => setShowVet(true)}>
        <VetVisits show={showVet} petID={petInfo.id} close={closeSection}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    // textDecorationLine: 'underline',
    // textDecorationColor: '#8659A3',
    marginBottom: 10
  },
  section: {
    width: 260,
    backgroundColor: '#F7EDFE',
    borderRadius: 5,
    margin: 5,
    padding: '3%',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    borderRightWidth: 2,
    borderRightColor: 'grey'
  },
  sectionTitle: {
    fontSize: 20,
    alignSelf: 'center'
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  backButton: {
    alignSelf: 'flex-start'
  }
})

export default PetProfile;