import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Login = (props) => {
  const [user, setUser] = useState('');
  const [newUser, setNewUser] = useState(false);

  return (
    <View>
      <Text>User</Text>
      <TextInput
        placeHolder='Your Name'
        onChangeText={name => setUser(name)}
        defaultValue={user}
      />

      <Button title='Login' onPress={() => props.loggingIn(user, newUser)} />
    </View>
  )
}

export default Login;