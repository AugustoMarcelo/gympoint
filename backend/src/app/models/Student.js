import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.FLOAT,
        height: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.Registration, {
      foreignKey: 'student_id',
      as: 'registration',
    });

    this.hasMany(models.Checkin, {
      foreignKey: 'student_id',
      as: 'checkin',
    });

    this.hasMany(models.HelpOrder, {
      foreignKey: 'student_id',
      as: 'help_order',
    });
  }
}

export default Student;
