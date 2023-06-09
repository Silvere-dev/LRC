const { Model } = require("sequelize");

class Employee extends Model {}

module.exports = (sequelize, DataTypes) => {
  return Employee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: ["^[a-zA-Z0-9éèêçàï.' -]+$", "i"],
            msg: "Le nom de famille de l'employé ne doit contenir ni des chiffres, ni des caractères spéciaux !!",
          },
          notEmpty: {
            msg: "Le nom de famille de l'employé ne doit pas être vide !!",
          },
        },
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: ["^[a-zA-Z0-9éèêçàï.' -]+$", "i"],
            msg: "Le prénom de l'employé ne doit contenir ni des chiffres, ni des caractères spéciaux !!",
          },
          notEmpty: {
            msg: "Le prénom de l'employé ne doit pas être vide !!",
          },
        },
      },
      gender: {
        type: DataTypes.ENUM("homme", "femme"),
        allowNull: false,
        validate: {
          isIn: {
            args: [["homme", "femme"]],
            msg: "Le genre de l'employé doit être soit homme, soit femme !!",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: {
            msg: "L'adresse de l'employé ne doit pas être vide !!",
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Le numéro de téléphone de l'employé ne doit pas être vide !",
          },
          is: {
            args: ["^[0-9 +]+$", "i"],
            msg: "Le numéro de téléphone de l'employé ne doit contenir que de chiffres ou certains caractères spéciaux !!",
          },
        },
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          isEmail: {
            msg: "L'adresse mail de l'employé doit être du bon format !!",
          },
          notEmpty: {
            msg: "L'adresse mail de l'employé ne doit pas être vide !!",
          },
        },
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: ["^[a-zA-Z0-9éèêçàï.' -]+$", "i"],
            msg: "Le poste de l'employé ne doit contenir ni des chiffres, ni des caractères spéciaux !!",
          },
          notEmpty: {
            msg: "Le poste de l'employé ne doit pas être vide !!",
          },
        },
      },
      status: {
        type: DataTypes.ENUM("actif", "non actif"),
        allowNull: false,
        defaultValue: "actif",
        validate: {
          isIn: {
            args: [["actif", "non actif"]],
            msg: "Le statut de l'employé doit être soit 'actif', soit 'non actif' !!",
          },
        },
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: {
            msg: "La photo de l'employé ne doit être vide !!",
          },
        },
      },
    },
    { sequelize, modelName: "Employee" }
  );
};
