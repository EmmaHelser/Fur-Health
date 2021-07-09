const queries = require('./sqlQueries.js');

module.exports = {
  addProfile: (reqData, res) => {
    console.log(reqData);
    queries.createProfile(reqData.petName, reqData.ownerName, reqData.birthday, reqData.age, reqData.gender,reqData.petWeight, reqData.family, reqData.petType, reqData.breed, (err, success) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send('Pet Added!')
      }
    })
  },
  retrievePets: (owner, res) => {
    queries.getPets(owner, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
  gatherAllPetInfo: (owner, pet, res) => {
    queries.getPetInfo(owner, pet, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
  getWeighIns: (petID, res) => {
    queries.getWeights(petID, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
  updateWeightGoals: (petID, goals, res) => {
    queries.updateGoals(petID, goals.weightGoal, goals.goalWeight, goals.status, (err, success) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send('Goals updated!');
      }
    })
  },
  addWeight: (petID, weight, res) => {
    queries.addWeighIn(petID, weight, (err, success) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send('Weight added!');
      }
    })
  }
 }