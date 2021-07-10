import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, Pressable, StyleSheet} from 'react-native';

const Login = (props) => {
  const [user, setUser] = useState('');
  const [newUser, setNewUser] = useState(false);
  const [background, setBackground] = useState('#FDFBFE');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fur Health</Text>
      <Text style={styles.fieldName}>User</Text>
      <TextInput
        style={styles.field}
        placeholder='Your Name'
        onChangeText={name => setUser(name)}
        defaultValue={user}
      />
      <Text style={styles.smallText}>* If new user, fill in name, click new user, and then login</Text>
      <Pressable
        style={{backgroundColor: background, height: '10%', width: '50%', borderRadius: 5}}
        onPressIn={press =>
        {setNewUser(true)
        setBackground('#B2DFFF')}
        }>
        <Text style={styles.newText}>New User</Text>
      </Pressable>
      <Button color='black' title='Login' onPress={() => props.loggingIn(user, newUser)} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D0B6E1',
    height: 250,
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newText: {
    textAlign: 'center',
    padding: 3
  },
  smallText: {
    fontSize: 10,
    textAlign: 'center',
    margin: 5,
    marginBottom: 7
  },
  title: {
    fontSize: 25,
    margin: 5,
    textDecorationLine: 'underline',
    textDecorationColor: '#8659A3',
    fontFamily: 'Marker Felt'
  },
  fieldName: {
    fontSize: 20,
    margin: 5
  },
  field: {
    height: '10%',
    width: '50%',
    borderRadius: 5,
    backgroundColor: '#FDFBFE',
    textAlign: 'center'
  }
})

export default Login;