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
          notNull: true,
          notEmpty: true,
        },
      },
      deadline: {
        type: DataTypes.DATEONLY,
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
