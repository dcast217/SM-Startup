const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Import the userRoutes file
const thought = require('../models/thought'); // Import the Thought model
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const app = express();

// Mount userRoutes at the '/api/users' endpoint
app.use('/api/users', userRoutes);

// Mount thoughtRoutes at the '/api/thoughts' endpoint
app.use('/api/thoughts', thoughtRoutes);

// Mount the userRoutes at the '/api' endpoint
app.use('/api', userRoutes);

// Other app configurations and middleware can be added here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});