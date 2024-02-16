const express = require('express');
const apiRoutes = require('./routes'); // Import the userRoutes file
const app = express();

// Mount the userRoutes at the '/api' endpoint
app.use('/api', apiRoutes);


app.get('/', function(req, res){
    res.send("Test!");
})
// Other app configurations and middleware can be added here

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});