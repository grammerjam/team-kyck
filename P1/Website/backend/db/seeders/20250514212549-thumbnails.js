'use strict';

const { Video } = require('../models');
const data = require('../../utils/data.json');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {

    for (let video of data) {
      const videoQuery = await Video.findOne({where: {title: video.title}});
      
      if (video.thumbnail.trending) {
        await videoQuery.createThumbnail({
          type: 'trending',
          size: 'small',
          src: video.thumbnail.trending.small
        });

        await videoQuery.createThumbnail({
          type: 'trending',
          size: 'large',
          src: video.thumbnail.trending.large
        });
      }

      await videoQuery.createThumbnail({
        type: 'regular',
        size: 'small',
        src: video.thumbnail.regular.small
      });

      await videoQuery.createThumbnail({
        type: 'regular',
        size: 'medium',
        src: video.thumbnail.regular.medium
      });

      await videoQuery.createThumbnail({
        type: 'regular',
        size: 'large',
        src: video.thumbnail.regular.large
      });
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Thumbnails';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {}, {});
  }
};
