'use strict';

const { User, Comment, UpDownVote } = require('../models');

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
    // Get all users and comments
    const users = await User.findAll();
    const comments = await Comment.findAll();

    if (!users.length || !comments.length) throw new Error('No users or comments found!');

    const votesToCreate = [];

    for (const comment of comments) {
      // 2 to 4 votes per comment
      const numVotes = Math.floor(Math.random() * 3) + 2; // 2, 3, or 4
      const voters = getRandomUniqueUsers(users, numVotes);

      for (const user of voters) {
        votesToCreate.push({
          userId: user.id,
          commentId: comment.id,
          upVote: Math.random() < 0.5 // true or false
        });
      }
    }

    await UpDownVote.bulkCreate(votesToCreate, { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'UpDownVotes';
    return queryInterface.bulkDelete(options, null, {});
  }
};