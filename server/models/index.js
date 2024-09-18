const Sequelize = require('sequelize');

// Initialize a new Sequelize instance (adjust with your database config)
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // or 'postgres', 'sqlite', etc.
});

// Import models
const User = require('./User')(sequelize, Sequelize.DataTypes);
const Post = require('./Post')(sequelize, Sequelize.DataTypes);

// Define associations if any
User.hasMany(Post);
Post.belongsTo(User);

// Export models and sequelize connection
module.exports = {
  sequelize,
  Sequelize,
  User,
  Post,
};

// Connect to MongoDB (adjust with your database URI)
mongoose.connect('mongodb://localhost:27017/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import models
const User = require('./User');
const Post = require('./Post');

// Export models
module.exports = {
  User,
  Post,
};
