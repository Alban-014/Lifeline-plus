const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Donor = require('./models/Donor');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/lifeline', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/donors', async (req, res) => {
  const donors = await Donor.find();
  res.json(donors);
});

app.post('/donor', async (req, res) => {
  const donor = new Donor(req.body);
  await donor.save();
  res.json({ message: 'Donor added successfully' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
