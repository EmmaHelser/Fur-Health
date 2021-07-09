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
        res.status(202).send(data);
      }
    })
  },
  gatherAllPetInfo: (owner, pet, res) => {
    queries.getPetInfo(owner, pet, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(202).send(data);
      }
    })
  }
}