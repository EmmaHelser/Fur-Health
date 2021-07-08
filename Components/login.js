import React, {useState} from 'react';
import {View, Text, TextInput, Button, Pressable, StyleSheet} from 'react-native';

const Login = (props) => {
  const [user, setUser] = useState('');
  const [newUser, setNewUser] = useState(false);

  return (
    <View style={styles.container}>
      <Text>User</Text>
      <TextInput
        placeHolder='Your Name'
        onChangeText={name => setUser(name)}
        defaultValue={user}
      />
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.newButton
        ]}
        onPressIn={press => setNewUser(true)}>
        <Text>New User</Text>
      </Pressable>
      <Button color='black' title='Login' onPress={() => props.loggingIn(user, newUser)} />
    </View>
  )

}

const styles = StyleSheet.create({
  newButton: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  container: {
    backgroundColor: '#D0B6E1',
    height: 250,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Login;