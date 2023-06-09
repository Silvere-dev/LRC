const { Model } = require("sequelize");

class StandardDepartment extends Model {}

module.exports = (sequelize, DataTypes) => {
  return StandardDepartment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
    },
    { sequelize, modelName: "StandardDepartment" }
  );
};
