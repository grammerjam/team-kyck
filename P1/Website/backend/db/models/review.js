'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Review.belongsTo(models.User, { foreignKey: 'userId'});
      // Review.belongsTo(models.Video, { foreignKey: 'videoId'});
    }
  }
  Review.init({
    userId: DataTypes.INTEGER,
    videoId: DataTypes.INTEGER,
    review: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};