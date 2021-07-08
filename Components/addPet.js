import React, {useState} from 'react';
import {ScrollView, View, Text, Image, Picker, TextInput, StyleSheet, Button} from 'react-native';

const AddPet = (props) => {
  const [petType, setPetType] = useState('');
  const [birthday, setBirthday] = useState('');
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petFamily, setPetFamily] = useState('');
  const [petWeight, setPetWeight] = useState('');
  const [petBreed, setPetBreed] = useState('');

  const petProfile = {
    petName: petName,
    ownerName: props.user,
    birthday: birthday,
    age: petAge,
    petWeight: petWeight,
    family: petFamily,
    petType: petType,
    breed: petBreed
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.pageTitle}>About Your Pet</Text>
      <View style={styles.petInfoSection}>
        <Text style={styles.inputLabel}>Pet Name</Text>
        <TextInput style={styles.inputArea}></TextInput>
      </View>
      <View style={styles.petInfoSection}>
        <Text style={styles.inputLabel}>Age</Text>
        <TextInput style={styles.inputArea}></TextInput>
      </View>
      <View style={styles.petInfoSection}>
        <Text style={styles.inputLabel}>Birthday</Text>
        <TextInput style={styles.inputArea} placeHolder='Year'></TextInput>
      </View>
      <View style={styles.petInfoSection}>
        <Text style={styles.inputLabel}>Family</Text>
        <TextInput style={styles.inputArea} placeHolder='Sister - Tinkerbell'></TextInput>
      </View>
      <View style={styles.petInfoSection}>
        <Text style={styles.inputLabel}>Type of Pet</Text>
        <Picker
          itemStyle={styles.petSelector}
          selectedValue={petType}
          onValueChange={selectedPet => setPetType(selectedPet)}>
            <Picker.Item label='Cat' value='Cat'/>
            <Picker.Item label='Dog' value='Dog'/>
            <Picker.Item label='Rabbit' value='Rabbit'/>
          </Picker>
      </View>
      <View style={styles.petInfoSection}>
        <Text style={styles.inputLabel}>Weight</Text>
        <TextInput style={styles.inputArea} placeHolder='13lb'></TextInput>
      </View>
      <View style={styles.petInfoSection}>
        <Text style={styles.inputLabel}>Breed</Text>
        <TextInput style={styles.inputArea} placeHolder='American Shorthair'></TextInput>
      </View>
      <Button color='#000' title='Add My Pet!'></Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBFE',
    justifyContent: 'center'
  },
  petInfoSection: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputArea: {
    borderRadius: 5,
    width: 210,
    height: 40,
    textAlign: 'center',
    backgroundColor: '#F7EDFE'
  },
  inputLabel: {
    fontSize: 25
  },
  pageTitle: {
    fontSize: 35,
    margin: 5,
    textDecorationLine: 'underline',
    textDecorationColor: '#8659A3'
  },
  petSelector: {
    backgroundColor: '#F7EDFE',
    width: 210,
    height: 40,
    borderRadius: 5,
    margin: 10
  },
  pickerTwo: {
    backgroundColor: 'transparent'
  }
})

export default AddPet;