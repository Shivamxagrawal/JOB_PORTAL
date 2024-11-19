const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connectionString = process.env.MONGO_URI;
        if (!connectionString) {
            throw new Error('MongoDB URI not found in environment variables');
        }
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB; // Ensure it's exported
