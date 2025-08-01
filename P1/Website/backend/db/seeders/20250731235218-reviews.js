'use strict';

const { User, Video, Review } = require('../models');
const path = require('path');
const fs = require('fs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

function getRandomUniqueUsers(users, n) {
  // Shuffle and pick n unique users
  const shuffled = users.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

module.exports = {
  async up (queryInterface, Sequelize) {
    // Load users
    const users = await User.findAll();
    if (users.length === 0) throw new Error('No users found!');

    // Load videos
    const videos = await Video.findAll();
    if (videos.length === 0) throw new Error('No videos found!');

    // Map video titles to video objects for quick lookup
    const videoMap = {};
    videos.forEach(v => { videoMap[v.title] = v; });

    // Load data.json
    const dataPath = path.join(__dirname, '../../utils/data.json');
    const videoData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    const reviewsToCreate = [];
    const usedUserVideoPairs = new Set(); // Track user-video combinations

    for (const vid of videoData) {
      const video = videoMap[vid.title];
      if (!video) continue; // skip if not in DB

      // 2 to 4 reviews per video
      const numReviews = Math.floor(Math.random() * 3) + 2; // 2, 3, or 4
      
      // Get available users who haven't reviewed this video yet
      const availableUsers = users.filter(user => {
        const pair = `${user.id}-${video.id}`;
        return !usedUserVideoPairs.has(pair);
      });

      // If not enough available users, skip this video
      if (availableUsers.length < numReviews) continue;

      const reviewers = getRandomUniqueUsers(availableUsers, numReviews);

      for (const user of reviewers) {
        const pair = `${user.id}-${video.id}`;
        usedUserVideoPairs.add(pair);
        
        reviewsToCreate.push({
          userId: user.id,
          videoId: video.id,
          review: Math.floor(Math.random() * 5) + 1 // 1-5 star rating
        });
      }
    }

    await Review.bulkCreate(reviewsToCreate, { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    return queryInterface.bulkDelete(options, null, {});
  }
};
