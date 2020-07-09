const Sequelize = require('sequelize');
const sequelize = require('./db');

const Usuario = sequelize.define('usuario', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, unique: true, allowNull: false},
    password: {type: Sequelize.STRING, allowNull: false}
});

module.exports = Usuario;