const { Model } = require("sequelize");

class Role extends Model{};

module.exports = (sequelize, DataTypes) => {
    return Role.init(
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
                    is: {
                        args: ["^[a-zA-Z0-9éèêçàï.' -]+$", "i"],
                        msg: "La description du rôle ne doit pas contenir de caractères spéciaux !!",
                    },
                    notEmpty: { 
                        msg: "La description du rôle ne doit pas être vide !!" 
                    },
                }
            }
        },
        { sequelize, modelName: "Role" }
    );
}