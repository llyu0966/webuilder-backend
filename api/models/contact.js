'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Contact extends Model { }

    Contact.init({
        github: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        linkedIn: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
    }, {
        sequelize,
        timestamps: false,
        modelName: 'contact'
    });

    Contact.associate = (models) => {
        // associations can be defined here
    };

    return Contact;
};