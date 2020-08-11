const { Tarea } = require("../models")

function crearTarea(req, res) {
    Tarea.create(req.body)
    .then(nuevaTarea => {
        res.status(201).json(nuevaTarea)
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
}


// TODO: listarTareas
// TODO: leerTarea
// TODO: modificarTarea
// TODO: eliminarTarea


module.exports = {
    crearTarea
}