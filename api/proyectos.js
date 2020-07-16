const {Proyecto} = require("../models")

function crearProyecto(req, res) {
    Proyecto.create(req.body)
    .then(nuevoProyecto => {
        res.status(201).json(nuevoProyecto)
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
}

function listarProyectos(req, res) {
    Proyecto.findAll()
    .then(proyectos => {
        res.status(200).json(proyectos)
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
}



module.exports = {
    crearProyecto,
    listarProyectos
    //TODO: añadir más funciones a medida que se vayan haciendo
}