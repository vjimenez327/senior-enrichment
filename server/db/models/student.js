const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validation:{
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validation:{
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.00,
      max: 4.00,
      notEmpty: true
    }
  }
},
{
  getterMethods: {
    fullName(){
      return this.firstName + ' ' + this.lastName;
    }
  }
}
);


module.exports = Student;
