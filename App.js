import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/homepage.js';
import Login from './Components/login.js';

export default function App() {
  const [user, setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const didLogin = (loggedUser, newUser) => {
    setUser(loggedUser);
    setLoggedIn(true);
    setNewUser(newUser);
  }

  return (
    <View style={styles.container}>
      {loggedIn === false
      ? <Login loggingIn={didLogin} />
      : <Home />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

