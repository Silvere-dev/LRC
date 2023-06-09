const { Model } = require("sequelize");

class Task extends Model {}

module.exports = (sequelize, DataTypes) => {
  return Task.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "La description de la tâche ne doit pas être vide !!",
          },
        },
      },
      status: {
        type: DataTypes.ENUM("en cours", "terminée"),
        allowNull: false,
        defaultValue: "en cours",
        validate: {
          isIn: {
            args: [["en cours", "terminée"]],
            msg: "Le statut de la tâche doit être soit 'en cours', soit 'terminée' !!",
          },
        },
      },
      deadline: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: {
            msg: "La date de fin officielle doit être du bon format !!",
          },
        },
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate: {
          isDate: {
            msg: "La date de fin décisive doit être du bon format !!",
          },
        },
      },
    },
    { sequelize, modelName: "Task" }
  );
};
