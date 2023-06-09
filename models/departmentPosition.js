const { Model } = require("sequelize");

class DepartmentPosition extends Model {}

module.exports = (sequelize, DataTypes) => {
  return DepartmentPosition.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      longitude: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          isNumeric: {
            msg: "La longitude ne doit contenir que des chiffres !!",
          },
        },
      },
      latitude: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          isNumeric: {
            msg: "La latitude ne doit contenir que des chiffres !!",
          },
        },
      },
      accuracy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: "La précision ne doit contenir que des chiffre !!",
        },
      },
    },
    { sequelize, modelName: "DepartmentPosition" }
  );
};
