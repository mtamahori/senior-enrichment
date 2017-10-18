const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campus', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  photo: {
    type: Sequelize.STRING,
    allowNull: true,
    // defaultValue: 'image'
  }

});

module.exports = Campus;
