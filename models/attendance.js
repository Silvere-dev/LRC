const { Model } = require("sequelize");

class Attendance extends Model {}

module.exports = (sequelize, DataTypes) => {
  return Attendance.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: {
            msg: "La date doit être du bon format !!",
          },
        },
      },
      startTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      breakStartTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      breakEndTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
    },
    { sequelize, modelName: "Attendance" }
  );
};
