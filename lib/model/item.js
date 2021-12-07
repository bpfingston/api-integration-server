'use strict';

const ItemTable = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Item',
    {
      assignTo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      toDo: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    });

  return model;
};

module.exports = ItemTable;