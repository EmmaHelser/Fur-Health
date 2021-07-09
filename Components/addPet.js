import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Image, Picker, TextInput, StyleSheet, Button, Modal} from 'react-native';

const AddPet = (props) => {
  const [petType, setPetType] = useState('');
  const [birthday, setBirthday] = useState('');
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petFamily, setPetFamily] = useState('');
  const [petWeight, setPetWeight] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [gender, setGender] = useState('');
  const [enableButton, setEnableButton] = useState(false);

  const petProfile = {
    petName: petName,
    ownerName: props.user,
    birthday: birthday,
    age: petAge,
    gender: gender,
    petWeight: petWeight,
    family: petFamily,
    petType: petType,
    breed: petBreed
  };

  useEffect(() => {
    if (petProfile.petName !== '' && petProfile.age !== '' && petProfile.petType !== '') {
      setEnableButton(true);
    }
  }, [petProfile])

  async function addPet() {
    const newPet = await petProfile;
    props.addProfile(newPet);
    props.profileCreated();
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalOn);
      }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>About Your Pet</Text>
        <View style={styles.petInfoSection}>
          <Text style={styles.inputLabel}>Pet Name</Text>
          <TextInput
            style={styles.inputArea}
            placeholder='Sir Snuffles'
            onChangeText={name => setPetName(name)}
            defaultValue={petName}
          />
        </View>
        <View style={styles.petInfoSection}>
          <Text style={styles.inputLabel}>Age</Text>
          <TextInput
            style={styles.inputArea}
            placeholder='13'
            onChangeText={age => setPetAge(age)}
            defaultValue={petAge}
          />
        </View>
        <View style={styles.petInfoSection}>
          <Text style={styles.inputLabel}>Birthday</Text>
          <TextInput
            style={styles.inputArea}
            placeholder='July 22, 2008 or July 2008'
            onChangeText={date => setBirthday(date)}
            defaultValue={birthday}
          />
        </View>
        <View style={styles.petInfoSection}>
          <Text style={styles.inputLabel}>Gender</Text>
          <Picker
            itemStyle={styles.petSelector}
            selectedValue={gender}
            onValueChange={selectedGender => setGender(selectedGender)}>
              <Picker.Item label='Select Gender' value='Select Gender'/>
              <Picker.Item label='Male' value='Male'/>
              <Picker.Item label='Female' value='Female'/>
            </Picker>
        </View>
        <View style={styles.petInfoSection}>
          <Text style={styles.inputLabel}>Family</Text>
          <TextInput
            style={styles.inputArea}
            placeholder='Sister - Lady Waffles, Brother - Sir Hissen'
            onChangeText={realtives => setPetFamily(realtives)}
            defaultValue={petFamily}
          />
        </View>
        <View style={styles.petInfoSection}>
          <Text style={styles.inputLabel}>Type of Pet</Text>
          <Picker
            itemStyle={styles.petSelector}
            selectedValue={petType}
            onValueChange={selectedPet => setPetType(selectedPet)}>
              <Picker.Item label='Select Pet' value='Select Pet'/>
              <Picker.Item label='Cat' value='Cat'/>
              <Picker.Item label='Dog' value='Dog'/>
              <Picker.Item label='Rabbit' value='Rabbit'/>
            </Picker>
        </View>
        <View style={styles.petInfoSection}>
          <Text style={styles.inputLabel}>Weight</Text>
          <TextInput
            style={styles.inputArea}
            placeholder='13lb'
            onChangeText={weight => setPetWeight(weight)}
            defaultValue={petWeight}
          />
        </View>
        <View style={styles.petInfoSection}>
          <Text style={styles.inputLabel}>Breed</Text>
          <TextInput
            style={styles.inputArea}
            placeholder='Persian'
            onChangeText={breed => setPetBreed(breed)}
            defaultValue={petBreed}
          />
        </View>
        <Button
          color='#000'
          title='Add My Pet!'
          onPress={() => addPet()}
          disabled={!enableButton}
        />
      </ScrollView>
    </Modal>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBFE',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
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
    marginHorizontal: '20%',
    marginBottom: '5%',
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