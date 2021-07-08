import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/homepage.js';
import Login from './Components/login.js';
import AddPet from './Components/addPet.js';

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

  return (
    <View style={styles.container}>
      {loggedIn === false
      ? <Login loggingIn={didLogin} />
      : (newUser === false
        ? <Home user={user}/>
        : <AddPet user={user} profileCreated={profileCreated}/>)}
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

