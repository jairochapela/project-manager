
const Sequelize = require('sequelize');

// Primero definimos sequelize con los parámetros de conexión
const sequelize = new Sequelize('projectmanager', 'root', 'aaa', {
    host: '51.91.252.217',
    dialect: 'mariadb'
});
  

module.exports = sequelize;