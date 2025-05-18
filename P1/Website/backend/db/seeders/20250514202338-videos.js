'use strict';

const { Video } = require('../models');
const data = require('../../utils/data.json');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    const videos = [];
    data.forEach(video => {
      videos.push({
        title: video.title,
        year: video.year,
        category: video.category,
        rating: video.rating,
        isBookmarked: video.isBookmarked,
        isTrending: video.isTrending
      })
    });
    await Video.bulkCreate([...videos], { validate: true }); 
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Videos';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {}, {});
  }
};
