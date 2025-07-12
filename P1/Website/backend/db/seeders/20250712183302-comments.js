'use strict';

const { Video, User } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const userQuery = await User.findOne({where: {email: 'jsnow@got.com'}});
    const videoQuery = await Video.findOne({where: {title: 'Beyond Earth'}});

    await userQuery.createComment({
      videoId: videoQuery.id,
      comment: 'Love this movie',
    });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Comments';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {}, {});
  }
};
