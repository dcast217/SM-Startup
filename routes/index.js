// Import route files
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Use route files
router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;