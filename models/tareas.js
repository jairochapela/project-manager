const Sequelize = require('sequelize');
const sequelize = require('./db');

/**
 * Modelo de tarea, con la información de la misma.
 * 
 * Nótese que la fecha de vencimiento puede ser nula, lo que simboliza que
 * la tarea no tiene por que tener una fecha límite.
 */
const Tarea = sequelize.define('tarea', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type: Sequelize.STRING, allowNull: false},
    fechaInicio: {type: Sequelize.DATE, allowNull: false},
    fechaVencimiento: {type: Sequelize.DATE, allowNull: true},
    fechaFin: {type: Sequelize.DATE, allowNull: true}
});

module.exports = Tarea;