const Sequelize = require('sequelize');
const sequelize = require('./db');

const Intervencion = sequelize.define('intervencion', {
    inicio: {type: Sequelize.DATE, allowNull: false},
    fin: {type: Sequelize.DATE, allowNull: true}
});

module.exports = Intervencion;