const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('student', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    // unique not working
    unique: true,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    // unique not working
    unique: true,

    validate: {
      isEmail: true
    }
  },

  campusId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

});

module.exports = Student;
