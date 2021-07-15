import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Modal, Button, TouchableOpacity} from 'react-native';
import axios from 'axios';
import formatDate from '../helpers.js';
import Visit from './visit.js';
import AddVisit from './addVetVisit.js';

const VetVisits = (props) => {
  const [lastVisit, setLastVisit] = useState('');
  const [vetVisits, setVetVisits] = useState([]);
  const [addVisit, setAddVisit] = useState(false);
  const [date, setDate] = useState('');
  const [visitAdded, setVisitAdded] = useState(false);

  useEffect(() => {
    getVisits();
    setVisitAdded(false);
  }, [props.show, visitAdded])

  useEffect(() => {
    getVisits()
  }, [])

  const getVisits = () => {
    axios.get(`http://127.0.0.1:3001/getVetVisits/${props.petID}`)
      .then(response => {
        setDate(formatDate(response.data[0][0].visit_date));
        setLastVisit(response.data[0][0]);
        setVetVisits(response.data[1]);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const closeAddModal = () => {
    setAddVisit(false);
  }

  const newVisit = () => {
    setVisitAdded(true);
    setAddVisit(false);
  }

  return (
    <View>
      <View>
        <Text style={styles.sectionTitle}>Vet Visits</Text>
        <View style={styles.infoSection}>
          <Text>Last Visit: </Text>
          <Text>{date}</Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.show}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalOn);
        }}
      >
        <View style={styles.container}>
          <View style={styles.button}>
            <Button title='Back' onPress={() => props.close()}/>
          </View>
          <Text style={styles.title}>Vet Visits</Text>
          <View style={styles.overview}>
            <Text style={styles.lastVisit}>Last Visit</Text>
            <View style={styles.visitDetails}>
              <View style={styles.subSection}>
                <Text style={styles.visitStats}>Date: </Text>
                <Text>{date}</Text>
                <Text style={styles.visitStats}>Doctor: </Text>
                <Text>{lastVisit.vet}</Text>
                <Text style={styles.visitStats}>Reason: </Text>
                <Text>{lastVisit.visit_reason}</Text>
              </View>
              <View style={styles.noteSection}>
                <Text style={styles.notesTitle}>Visit Notes</Text>
                <Text>{lastVisit.visit_notes}</Text>
              </View>
            </View>
          </View>
          <View style={styles.add}>
            <TouchableOpacity onPress={() => setAddVisit(true)}>
              <Text>Add Visit</Text>
            </TouchableOpacity>
            <AddVisit back={closeAddModal} show={addVisit} petID={props.petID} addVisit={newVisit}/>
          </View>
          <View style={styles.visitList}>
            {vetVisits.length !== 0
              ? (vetVisits.map(visit => <Visit key={visit.visit_date} date={visit.visit_date} reason={visit.visit_reason}/>))
              : null
            }
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '15%',
    marginHorizontal: 50,
    backgroundColor: '#fff',
    height: '85%',
    width: 300,
    borderRadius: 5,
    borderColor: '#D0B6E1',
    borderWidth: 2
  },
  sectionTitle: {
    fontSize: 20,
    alignSelf: 'center'
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  button: {
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  title: {
    fontSize: 30,
    alignItems: 'flex-start',
    marginBottom: 30,
    marginTop: 10,
    textDecorationLine: 'underline',
    textDecorationColor: '#8659A3'
  },
  add: {
    backgroundColor: '#F7EDFE',
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    borderRightWidth: 2,
    borderRightColor: 'grey',
    width: 260,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7
  },
  overview: {
    width: 260,
    height: '25%',
    marginBottom: 20,
    padding: '3%',
    backgroundColor: '#F7EDFE',
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    borderRightWidth: 2,
    borderRightColor: 'grey'
  },
  lastVisit: {
    alignItems: 'center',
    justifyContent:'center',
    alignSelf: 'center',
    margin: 3,
    fontSize: 20,
    textDecorationLine: 'underline',
    textDecorationColor: '#8659A3'
  },
  visitDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  subSection: {
    width: '25%'
  },
  noteSection: {
    width: '65%',
    height: '125%',
    margin: 3,
    alignItems: 'center'
  },
  notesTitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 3,
  },
  visitStats: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold'
  },
})

export default VetVisits;