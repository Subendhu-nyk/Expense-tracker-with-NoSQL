const mongoose = require('mongoose');

const mongoClient = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.DB_NAME,
    });
    console.log('Connected to the database successfully');
  } catch (err) {
    console.error('Failed to connect to the database', err);
    throw err;
  }
};

module.exports = mongoClient;
