const { Model } = require("sequelize");

class RoleAction extends Model{};

module.exports = (sequelize, DataTypes) => {
    return RoleAction.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
        },
        { sequelize, modelName: "RoleAction" }
    );
}