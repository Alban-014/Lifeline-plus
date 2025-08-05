const mongoose = require('mongoose');

const DonorSchema = new mongoose.Schema({
  name: String,
  bloodType: String,
  location: String,
  lastDonationDate: Date,
  phone: String
});

module.exports = mongoose.model('Donor', DonorSchema);
