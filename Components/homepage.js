import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Image, StyleSheet, Pressable} from 'react-native';
import axios from 'axios';
import AddPet from './addPet.js';
import NameTag from './nameTag.js';
import PetProfile from './petProfile.js';

const Home = (props) => {
  const [pet, setPet] = useState('');
  const [petList, setPetList] = useState([]);
  const [addPet, setAddPet] = useState(false);

  useEffect(() => {
    getPets()
  }, [])

  useEffect(() => {
    getPets()
  }, [addPet])

  const getPets = () => {
    axios.get(`http://127.0.0.1:3000/getPets/${props.user}`)
    .then(response => {
      setPetList(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const viewProfile = (desiredPet) => {
    setPet(desiredPet);
  }

  const profileCreated = () => {
    setAddPet(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {addPet === true
        ? <AddPet user={props.user} addProfile={props.addProfile} profileCreated={profileCreated}/>
        : (pet === ''
            ? <View>
                <Text style={styles.title}>Your Pets</Text>
                <View style={styles.petList}>
                  {petList.map(pet => <NameTag key={pet.pet_name} viewProfile={viewProfile} pet={pet}/> )}
                </View>
                <Pressable style={styles.petList} onPress={() => setAddPet(true)}>
                  <Text style={styles.addPet}>Add New Pet!</Text>
                </Pressable>
              </View>
            : <PetProfile pet={pet} user={props.user}/>)
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D0B6E1',
    height: '80%',
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    marginTop: '25%',
    paddingBottom: 50,
    borderRadius: 5
  },
  petList: {
    width: 250,
    borderRadius: 5,
    backgroundColor: '#F7EDFE',
    padding: 5,
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    width: 250,
    alignSelf: 'center',
    marginBottom: 10,
    textDecorationLine: 'underline',
    textDecorationColor: '#8659A3'
  },
  addPet: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})


export default Home;