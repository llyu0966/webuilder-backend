'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Image extends Model { }

    Image.init({
        image: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        timestamps: false,

        modelName: 'image'
    });

    Image.associate = (models) => {
        // associations can be defined here
    };

    return Image;
};