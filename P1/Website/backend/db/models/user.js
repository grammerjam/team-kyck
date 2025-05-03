'use strict';
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  };

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
              args: true,
              msg: 'First Name is required'
          }
        }

      },
      lastName: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
              args: true,
              msg: 'Last Name is required'
          }
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
          unique: true,
        validate: {
          len: {
            args: [4, 30],
            msg: 'Username must be between 4 be 30 characters'
          },
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: 'Invalid email'
          },
          len: {
            args: [3, 256],
            msg: 'Email must be between 3 be 256 characters'
          },

        }
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: {
            args: [60, 60],
            msg: ''
          }
        }
      }
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
        }
      }
    }
  );
  return User;
};