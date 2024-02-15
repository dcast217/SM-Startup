const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Define and export Mongoose models
module.exports.User = require('./user');
module.exports.Thought = require('./thought');
module.exports.Reaction = require('./reacts');