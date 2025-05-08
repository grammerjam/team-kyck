'use strict';

const { User } = require('../models');
// const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        firstName: 'John',
        lastName: 'Snow',
        email: 'jsnow@got.com',
        username: 'kinginthenorth',
        password: 'bastard123'
        // hashedPassword: bcrypt.hashSync('bastard123'),
      },
      {
        firstName: 'Jamie',
        lastName: 'Lannister',
        email: 'jlannister@got.com',
        username: 'kingslayer',
        password: 'righthand123'
      },
      {
        firstName: 'Sansa',
        lastName: 'Stark',
        email: 'sstark@got.com',
        username: 'queeninthenorth',
        password: 'killjoffrey123'
      },
      {
        firstName: 'Daenerys',
        lastName: 'Stormborn',
        email: 'dstormborn@got.com',
        username: 'breakerofchains',
        password: 'takethethrone123'
      },
      {
        firstName: 'Tyrion',
        lastName: 'Lannister',
        email: 'tlannister@got.com',
        username: 'queenshand',
        password: 'betterplans123'
      }
    ], { validate: true }); 
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['kinginthenorth', 'kingslayer', 'queeninthenorth', 'breakerofchains', 'queenshand'] }
    }, {});
  }
};