
const Sequelize = require('sequelize');

// Primero definimos sequelize con los parámetros de conexión
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb'
});
  

module.exports = sequelize;