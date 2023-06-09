module.exports = {
  host: "localhost",
  user: "root",
  password: "",
  db: "lrcs_lrcsheet_db",
  dialect: "mysql",
  dialectOptions: {
    useUTC: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
