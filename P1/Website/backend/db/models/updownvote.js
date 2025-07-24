'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UpDownVote extends Model {
    static associate(models) {
      UpDownVote.belongsTo(models.User, { foreignKey: 'userId'});
      UpDownVote.belongsTo(models.Comment, { foreignKey: 'commentId'});
    }
  }
  UpDownVote.init({
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER,
    upVote: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UpDownVote',
  });
  return UpDownVote;
};