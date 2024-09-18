module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      // Define attributes
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
      },
      // Other attributes...
    });
  
    return Post;
  };
  