'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class About extends Model { }

  About.init({
    content: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      }
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'about'
  });

  About.associate = (models) => {
    // associations can be defined here
  };

  return About;
};