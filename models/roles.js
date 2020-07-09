const Sequelize = require('sequelize');
const sequelize = require('./db');

const Rol = sequelize.define('rol', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type: Sequelize.STRING, allowNull: false},
    permisos: {type: Sequelize.STRING, allowNull: true}
});

module.exports = Rol;