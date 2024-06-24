const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB is connected'))
    .catch(() => console.log('Failed to connect to MongoDB'))
}

module.exports = connectDB;