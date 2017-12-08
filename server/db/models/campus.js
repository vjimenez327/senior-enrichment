const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://goo.gl/4rZrVx'
    },
    description: {
        type: Sequelize.TEXT('long')
    }

});


module.exports = Campus;
