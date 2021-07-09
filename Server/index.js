const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller.js')

app.use(express.json());
app.listen(port, (req, res) => {
  console.log('Listening on 3000!');
})

app.post('/addPet', (req, res) => {
  controller.addProfile(req.body, res);
})

app.get('/getPets/:ownerName', (req, res) => {
  controller.retrievePets(req.params.ownerName, res);
})

app.get('/getPetInfo/:user&:pet', (req, res) => {
  controller.gatherAllPetInfo(req.params.user, req.params.pet, res);
})

app.get('/getWeights/:petID', (req, res) => {
  controller.getWeighIns(req.params.petID, res);
})

app.patch('/updateGoals/:petID', (req, res) => {
  console.log(req.body);
  controller.updateWeightGoals(req.params.petID, req.body, res);
})