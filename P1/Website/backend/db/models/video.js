'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    static associate(models) {
      Video.hasMany(models.Thumbnail, { foreignKey: 'videoId'});
    }
  }
  Video.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    category: DataTypes.STRING,
    rating: DataTypes.STRING,
    isBookmarked: DataTypes.BOOLEAN,
    isTrending: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};