// models/Wine.js
const mongoose = require('mongoose');

const WineSchema = new mongoose.Schema({
  code: String,
  country: String,
  region: String,
  volume: String,
  type: String,
  productName: String,
  year: String,
  grape: String,
  price: String,
  discount: String,
});

module.exports = mongoose.model('Wine', WineSchema);