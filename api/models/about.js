'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class About extends Model { }

    About.init({
        content: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 250],
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