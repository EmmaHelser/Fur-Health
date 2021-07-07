import React, {useState} from 'react';
import {View, Text, Image, Picker} from 'react-native';

const AddPet = () => {
  const [pet, setPet] = useState('');

  return (
    <View>
      <Text>Add Pet</Text>
      <Picker
        selectedValue={pet}
        onValueChange={selectedPet => setPet(selectedPet)}>
          <Picker.Item label='Cat' value='Cat'/>
          <Picker.Item label='Dog' value='Dog'/>
          <Picker.Item label='Rabbit' value='Rabbit'/>
        </Picker>
    </View>
  );
}

export default AddPet;