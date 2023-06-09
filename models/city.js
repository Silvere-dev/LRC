const { Model } = require("sequelize");

class City extends Model {}

module.exports = (sequelize, DataTypes) => {
  return City.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: ["^[a-zA-Z0-9éèêçàï.' -]+$", "i"],
            msg: "Le nom de la ville ne doit pas contenir de caractères spéciaux !!",
          },
          notEmpty: {
            msg: "Le nom de la ville ne doit pas être vide !!",
          },
        },
      },
    },
    { sequelize, modelName: "City" }
  );
};
