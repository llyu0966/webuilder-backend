'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Layout extends Model { }

  Layout.init({
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
        notEmpty: true,
      }
    },
    layout: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'layout'
  });

  Layout.associate = (models) => {
    // associations can be defined here
  };

  return Layout;
};