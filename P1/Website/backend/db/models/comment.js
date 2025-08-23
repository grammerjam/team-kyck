'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: 'userId'});
      Comment.belongsTo(models.Video, { foreignKey: 'videoId'});
      Comment.hasMany(models.UpDownVote, { foreignKey: 'commentId'});
    }
  }
  Comment.init({
    userId: DataTypes.INTEGER,
    videoId: DataTypes.INTEGER,
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};