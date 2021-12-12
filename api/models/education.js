'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Education extends Model { }

    Education.init({
        header: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        description: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
    }, {
        sequelize,
        timestamps: false,
        modelName: 'education'
    });

    Education.associate = (models) => {
        // associations can be defined here
    };

    return Education;
};