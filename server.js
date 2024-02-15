const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Import the userRoutes file

const express = require('express');
const app = express();

// Mount the userRoutes at the '/api' endpoint
app.use('/api', userRoutes);

// Other app configurations and middleware can be added here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});