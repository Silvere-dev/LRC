const { Model } = require("sequelize");

class Standard extends Model {}

module.exports = (sequelize, DataTypes) => {
  return Standard.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      day: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: "Le jour ne doit pas être vide !!",
        },
      },
      dayNumber: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: {
            msg: "Le numéro du jour ne doit contenir que des chiffres !!",
          },
        },
      },
      month: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: "Le mois ne doit pas être vide !!",
        },
      },
      startTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.TIME,
      },
      breakStartTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      breakEndTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
    },
    { sequelize, modelName: "Standard" }
  );
};
