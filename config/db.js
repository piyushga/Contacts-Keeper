const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const Dbconnect = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB connected...');
  } catch (error) {
    console.log(error);
  }
};

module.exports = Dbconnect;
