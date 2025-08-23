// 'use strict';

// const { Video, User } = require('../models');

// let options = {};
// if (process.env.NODE_ENV === 'production') {
//   options.schema = process.env.SCHEMA;  // define your schema in options object
// }

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     const userQuery = await User.findOne({where: {email: 'jsnow@got.com'}});
//     const videoQuery = await Video.findOne({where: {title: 'Beyond Earth'}});

//     await userQuery.createComment({
//       videoId: videoQuery.id,
//       comment: 'Love this movie',
//     });
//   },

//   async down (queryInterface, Sequelize) {
//     options.tableName = 'Comments';
//     const Op = Sequelize.Op;
//     return queryInterface.bulkDelete(options, {}, {});
//   }
// };

'use strict';

const { User, Video, Comment } = require('../models');
const path = require('path');
const fs = require('fs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

// Pool of sample comments
// const sampleComments = [
//   "Amazing! I loved every minute.",
//   "This was so informative.",
//   "Great visuals and storytelling.",
//   "I learned something new today.",
//   "Not my favorite, but still good.",
//   "Can someone explain the ending?",
//   "The soundtrack was awesome!",
//   "I would recommend this to friends.",
//   "Looking forward to more like this.",
//   "The acting was top notch.",
//   "A bit slow in the middle, but worth it.",
//   "I didn't expect that twist!",
//   "The cinematography is beautiful.",
//   "I want a sequel!",
//   "This is a masterpiece."
// ];
const sampleComments = [
  {
    comment: "Amazing! I loved every minute.",
    rating: 5
  },
  {
    comment: "This was so informative.",
    rating: 4
  },
  {
    comment: "Great visuals and storytelling.",
    rating: 4
  },
  {
    comment: "Not my favorite, but still good.",
    rating: 3
  },
  {
    comment: "Can someone explain the ending?",
    rating: 3
  },
  {
    comment: "The soundtrack was awesome!",
    rating: 4
  },
  {
    comment: "I would recommend this to friends.",
    rating: 5
  },
  {
    comment: "Looking forward to more like this.",
    rating: 5
  },
  {
    comment: "The acting was top notch.",
    rating: 4
  },
  {
    comment: "A bit slow in the middle, but worth it.",
    rating: 3
  },
  {
    comment: "I didn't expect that twist!",
    rating: 4
  },
  {
    comment: "The cinematography is beautiful.",
    rating: 4
  },
  {
    comment: "This is a masterpiece.",
    rating: 5
  }
];

function getRandomComments(n) {
  // Shuffle and pick n unique comments
  const shuffled = sampleComments.sort(() => 0.5 - Math.random());
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

    const commentsToCreate = [];

    for (const vid of videoData) {
      const video = videoMap[vid.title];
      if (!video) continue; // skip if not in DB

      // 3 to 4 comments per video
      const numComments = Math.floor(Math.random() * 2) + 3; // 3 or 4
      const comments = getRandomComments(numComments);

      // Randomly assign users to comments
      const shuffledUsers = users.sort(() => 0.5 - Math.random());

      for (let i = 0; i < comments.length; i++) {
        commentsToCreate.push({
          userId: shuffledUsers[i % users.length].id,
          videoId: video.id,
          comment: comments[i].comment,
          rating: comments[i].rating,
        });
      }
    }

    await Comment.bulkCreate(commentsToCreate, { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Comments';
    return queryInterface.bulkDelete(options, null, {});
  }
};