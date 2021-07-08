const queries = require('./sqlQueries.js');

module.exports = {
  addProfile: (reqData, res) => {
    queries.createProfile(reqData.petName, reqData.ownerName, reqData.birthday, reqData.age, reqData.petWeight, reqData.family, reqData.petType, reqData.breed, (err, success) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send('Pet Added!')
      }
    })
  }
}