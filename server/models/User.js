module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      // Define attributes
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: 'Username is required',
          },
          notEmpty: {
            msg: 'Username cannot be empty',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Email address must be valid',
          },
          notNull: {
            msg: 'Email is required',
          },
          notEmpty: {
            msg: 'Email cannot be empty',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8],
            msg: 'Password must be at least 8 characters long',
          },
          notNull: {
            msg: 'Password is required',
          },
          notEmpty: {
            msg: 'Password cannot be empty',
          },
        },
      },
    });
  // Hooks for hashing password before saving
  User.beforeCreate(async (user) => {
    // You can use bcrypt to hash the password
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);
  });

  return User;
};