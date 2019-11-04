import Sequelize, { Model } from 'sequelize';
import { parseISO, isAfter } from 'date-fns';

class Registration extends Model {
  static init(sequelize) {
    super.init(
      {
        start_date: Sequelize.DATEONLY,
        end_date: Sequelize.DATEONLY,
        price: Sequelize.FLOAT,
        active: {
          type: Sequelize.VIRTUAL,
          get() {
            return isAfter(parseISO(this.end_date), new Date());
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: 'student_id',
      as: 'student',
    });
    this.belongsTo(models.Plan, {
      foreignKey: 'plan_id',
      as: 'plan',
    });
  }
}

export default Registration;
