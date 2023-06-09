const { Model } = require("sequelize");

class Department extends Model {}

module.exports = (sequelize, DataTypes) => {
  return Department.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: ["^[a-zA-Z0-9éèêçàï.' -]+$", "i"],
            msg: "Le titre du département ne doit pas contenir de caractères spéciaux !!",
          },
          notEmpty: {
            msg: "Le titre du département ne doit pas être vide !!",
          },
        },
      },
    },
    { sequelize, modelName: "Department" }
  );
};
