'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {}

  Experience.init({
    header: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        }
      },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'experience'
  });

  Experience.associate = (models) => {
    // associations can be defined here
  };

  return Experience;
};