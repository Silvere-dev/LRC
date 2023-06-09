const { Model } = require("sequelize");

class Absence extends Model {}

module.exports = (sequelize, DataTypes) => {
  return Absence.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      startTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      endTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      validation: {
        type: DataTypes.ENUM(
          "non lu",
          "refusée",
          "acceptée",
          "en cours",
          "terminée",
          "annulée"
        ),
        allowNull: false,
        defaultValue: "non lu",
        validate: {
          isIn: {
            args: [
              [
                "non lu",
                "refusée",
                "acceptée",
                "en cours",
                "terminée",
                "annulée",
              ],
            ],
            msg: "La valdiation de l'absence doit être soit 'non lu', 'refusée', 'acceptée', 'en cours', 'terminée' ou 'annulée'",
          },
          notEmpty: {
            msg: "La validation de l'absence ne doit être vide !!",
          },
        },
      },
      emergency: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { sequelize, modelName: "Absence" }
  );
};
