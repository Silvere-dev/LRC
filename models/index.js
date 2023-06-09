const dbConfig = require("../configs/database");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: { ...dbConfig.pool },
});

const database = {
  Sequelize,
  sequelize,
  absence: require("./absence")(sequelize, Sequelize),
  action: require("./action")(sequelize, Sequelize),
  admin: require("./admin")(sequelize, Sequelize),
  attendance: require("./attendance")(sequelize, Sequelize),
  city: require("./city")(sequelize, Sequelize),
  country: require("./country")(sequelize, Sequelize),
  department: require("./department")(sequelize, Sequelize),
  departmentPosition: require("./departmentPosition")(sequelize, Sequelize),
  employee: require("./employee")(sequelize, Sequelize),
  reason: require("./reason")(sequelize, Sequelize),
  role: require("./role")(sequelize, Sequelize),
  roleAction: require("./roleAction")(sequelize, Sequelize),
  standard: require("./standard")(sequelize, Sequelize),
  standardDepartment: require("./standardDepartment")(sequelize, Sequelize),
  task: require("./task.js")(sequelize, Sequelize),
};

/* absence */

database.absence.Reason = database.absence.belongsTo(database.reason);
database.absence.Employee = database.absence.belongsTo(database.employee, {
  foreignKey: { allowNull: false },
});
database.absence.Admin = database.absence.belongsTo(database.admin);

/* action */

database.action.Role = database.action.belongsToMany(database.role, {
  through: database.roleAction,
});

/* admin */

database.admin.Employee = database.admin.belongsTo(database.employee, {
  foreignKey: { allowNull: false },
});
database.admin.Role = database.admin.belongsTo(database.role, {
  foreignKey: { allowNull: false },
});
database.admin.Reason = database.admin.hasMany(database.reason);
database.admin.Absence = database.admin.hasMany(database.absence);

/* attendance */
database.attendance.Reason = database.attendance.belongsTo(database.reason);
database.attendance.Employee = database.attendance.belongsTo(
  database.employee,
  { foreignKey: { allowNull: false } }
);
database.attendance.Task = database.attendance.hasMany(database.task);

/* city */

database.city.Employee = database.city.hasMany(database.employee);
database.city.Standard = database.city.hasMany(database.standard);
database.city.Country = database.city.belongsTo(database.country, {
  foreignKey: { allowNull: false },
});
database.city.Department = database.city.hasMany(database.department);

/* country */

database.country.Employee = database.country.hasMany(database.employee);
database.country.Standard = database.country.hasMany(database.standard);
database.country.City = database.country.hasMany(database.city);

/* department */

database.department.Standard = database.department.belongsToMany(
  database.standard,
  { through: database.standardDepartment }
);
database.department.DepartmentPosition = database.department.hasOne(
  database.departmentPosition
);
database.department.City = database.department.belongsTo(database.city);

/* departmentPosition */

database.departmentPosition.Department = database.departmentPosition.belongsTo(
  database.department,
  { foreignKey: { allowNull: false } }
);

/* employee */

database.employee.Admin = database.employee.hasOne(database.admin);
database.employee.City = database.employee.belongsTo(database.city, {
  foreignKey: { allowNull: false },
});
database.employee.Country = database.employee.belongsTo(database.country, {
  foreignKey: { allowNull: false },
});
database.employee.Department = database.employee.belongsTo(
  database.department,
  {
    foreignKey: { allowNull: false },
  }
);
database.employee.Attendance = database.employee.hasMany(database.attendance);
database.employee.Absence = database.employee.hasMany(database.absence);

/* reason */

database.reason.Absence = database.reason.hasOne(database.absence);
database.reason.Attendance = database.reason.hasOne(database.attendance);
database.reason.Admin = database.reason.belongsTo(database.admin);

/* role */

database.role.Action = database.role.belongsToMany(database.action, {
  through: database.roleAction,
});
database.role.Admin = database.role.hasMany(database.admin);

/* roleAction */

// role - action

/* standard */

database.standard.City = database.standard.belongsTo(database.city);
database.standard.Country = database.standard.belongsTo(database.country);
database.standard.Department = database.standard.belongsToMany(
  database.department,
  { through: database.standardDepartment }
);

/* task */

database.task.Attendance = database.task.belongsTo(database.attendance, {
  foreignKey: { allowNull: false },
});

module.exports = database;
