'use strict';
const { Model } = require('sequelize');
const { isAfter } = require('date-fns');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate (models) {}
  }
  Todo.init(
    {
      body: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isAlphanumeric: true,
          notNull: true,
          notEmpty: true,
        },
      },
      deadline: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isValidDate (value) {
            if (isAfter(new Date(value), new Date())) {
              throw new Error('Please, check day');
            }
          },
        },
      },
      isDone: {
        field: 'is_done',
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Todo',
      tableName: 'todos',
      underscored: true,
    }
  );
  return Todo;
};
