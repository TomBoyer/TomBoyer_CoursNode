//créer un model thing qui sera importé ailleurs pour la création de nouveaux thing sur le site
const mongoose = require('mongoose');

//créer un schema de création avec les diffférents types et champs
const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

//exporter le model de schema pour importation depuis l'app
module.exports = mongoose.model('Thing', thingSchema);