const { Model } = require("sequelize");

class Country extends Model {}

module.exports = (sequelize, DataTypes) => {
  return Country.init(
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
            msg: "Le nom du pays ne doit pas contenir de caractères spéciaux !!",
          },
          notEmpty: {
            msg: "Le nom du pays ne doit pas être vide !!",
          },
        },
      },
    },
    { sequelize, modelName: "Country" }
  );
};
