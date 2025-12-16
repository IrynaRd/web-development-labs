const Sequelize = require("sequelize");
const dbConfig = require("../../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DATABASE, 
    dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool
});

module.exports = sequelize;