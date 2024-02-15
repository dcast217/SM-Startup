const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// Route to get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Retrieve all users from the database
        res.json(users); // Send the users as JSON response
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;