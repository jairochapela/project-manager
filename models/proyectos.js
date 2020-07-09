const Sequelize = require('sequelize');
const sequelize = require('./db');

const Proyecto = sequelize.define('proyecto', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type: Sequelize.STRING, allowNull: false},
    descripcion: {type: Sequelize.TEXT, allowNull: true},
    fechaInicio: {type: Sequelize.DATE, allowNull: false},
    fechaEntrega: {type: Sequelize.DATE, allowNull: true}
});

module.exports = Proyecto;