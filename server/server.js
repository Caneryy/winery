const express = require('express');
// const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Wine = require('./models/Wine'); // Adjust the path as necessary


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace the URI string with your MongoDB connection string.
const mongoURI = 'mongodb://mongo:27017/winerydb';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// const wineSchema = new mongoose.Schema({
//   code: String,
//   country: String,
//   region: String,
//   volume: String,
//   type: String,
//   productName: String,
//   year: String,
//   grape: String,
//   price: String,
//   discount: String
// });

// const Wine = mongoose.model('Wine', wineSchema);

app.post('/wine', async (req, res) => {
  const wineEntry = new Wine(req.body);
  try {
    await wineEntry.save();
    res.status(201).send({ message: 'Wine entry saved successfully!', data: wineEntry });
  } catch (error) {
    res.status(500).send({ message: 'Failed to save wine entry.', error });
  }
});

app.get('/wines', async (req, res) => {
  try {
    const wines = await Wine.find();
    res.json(wines);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching wines', error });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
