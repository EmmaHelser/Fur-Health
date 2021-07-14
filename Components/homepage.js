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
    axios.get(`http://127.0.0.1:3001/getPets/${props.user}`)
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

  const closeProfile = () => {
    setPet('');
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
                <Pressable style={styles.addButton} onPress={() => setAddPet(true)}>
                  <Text style={styles.addPet}>Add New Pet!</Text>
                </Pressable>
              </View>
            : <PetProfile pet={pet} user={props.user} close={closeProfile}/>)
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '80%',
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    marginTop: '25%',
    paddingBottom: 50,
    borderRadius: 5,
    borderColor: '#D0B6E1',
    borderWidth: 2
  },
  petList: {
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
    textAlign: 'center',
    marginHorizontal: 5,
  },
  addButton: {
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: '20%',
    width: 250,
    borderRadius: 5,
    backgroundColor: '#F7EDFE',
     padding: 11,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    borderRightWidth: 2,
    borderRightColor: 'grey'
  }
})


export default Home;