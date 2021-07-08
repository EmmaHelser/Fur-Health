import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/homepage.js';
import Login from './Components/login.js';
import AddPet from './Components/addPet.js';
import axios from 'axios';

export default function App() {
  const [user, setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [newUser, setNewUser] = useState(false);

  const didLogin = (loggedUser, newUser) => {
    setUser(loggedUser);
    setLoggedIn(true);
    setNewUser(newUser);
  }

  const profileCreated = () => {
    setNewUser(false);
  }

  const addProfile = (newProfile) => {
    const option = {
      "method": 'post',
      "url": 'http://192.168.0.5:3000/addPet',
      "data": newProfile
    }
    axios(option)
      .then (response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <View style={styles.container}>
      {loggedIn === false
      ? <Login loggingIn={didLogin} />
      : (newUser === false
        ? <Home user={user}/>
        : <AddPet user={user} profileCreated={profileCreated} addProfile={addProfile}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

