import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import axios from 'axios';
import NameTag from './nameTag.js'

const Home = (props) => {
  const [pet, setPet] = useState('');
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    function getPets() {
      axios.get(`http://10.0.0.240:3000/getPets/${props.user}`)
      .then(response => {
        setPetList(response.data);
      })
      .catch(err => {
        console.log(err);
      })
    }

    getPets()
  }, [])

  return (
    <View>
      {petList.map(pet => <NameTag key={pet.pet_name} pet={pet}/> )}
    </View>
  );
}


export default Home;