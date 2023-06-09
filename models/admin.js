const { Model } = require("sequelize");

class Admin extends Model {}

module.exports = (sequelize, DataTypes) => {
  return Admin.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      matricule: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: ["^[A-Z0-9]+$", "i"],
            msg: "Le numéro de matricule de l'administrateur ne doit contenir que des chiffres et des lettres !!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Le mot de passe de l'administrateur ne doit pas être vide !!",
          },
        },
      },
    },
    { sequelize, modelName: "Admin" }
  );
};
