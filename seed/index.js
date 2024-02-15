const mongoose = require('mongoose');
const User = require('../models/sser');
const Thought = require('../models/thought');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Seed data
const seedData = {
    users: [
        { username: 'user1', email: 'user1@example.com' },
        { username: 'user2', email: 'user2@example.com' }
        // Add more user data as needed
    ],
    thoughts: [
        { thoughtText: 'Sample thought 1', username: 'user1' },
        { thoughtText: 'Sample thought 2', username: 'user2' }
        // Add more thought data as needed
    ]};
    // Add seed data for other models


// Seed the database
async function seedDatabase() {
    try {
        await User.insertMany(seedData.users);
        await Thought.insertMany(seedData.thoughts);
        // Insert seed data for other models as needed
        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();