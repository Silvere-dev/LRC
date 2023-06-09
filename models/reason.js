const { Model } = require("sequelize");

class Reason extends Model{};

module.exports = (sequelize, DataTypes) => {
    return Reason.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: { 
                        msg: "La description de la raison ne doit pas être vide !!" 
                    },
                }
            },
            status: {
                type: DataTypes.ENUM("lu", "non lu"),
                allowNull: false,
                defaultValue: "non lu",
                validate: {
                    isIn: {
                        args: [["lu", "non lu"]],
                        msg: "Le statut de la raison doit être soit 'lu', soit 'non lu' !!"
                    }
                }
            }
        },
        { sequelize, modelName: "Reason" }
    );
}