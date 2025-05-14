'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Thumbnail extends Model {
    static associate(models) {
      Thumbnail.belongsTo(models.Video, { foreignKey: 'videoId'});
    }
  }
  Thumbnail.init({
    videoId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Thumbnail',
  });
  return Thumbnail;
};