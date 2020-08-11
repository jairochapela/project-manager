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



function listarTareas(req, res) {
    Tarea.findAll()
    .then(tareas => {
        res.status(200).json(tareas)
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
}

function leerTarea(req, res) {
    Tarea.findByPk(req.params.id)
    .then(tarea => {
        if (tarea) res.status(200).json(tarea)
        else res.status(404).json("Tarea no encontrado")
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
}

function modificarTarea(req, res) {
    Tarea.findByPk(req.params.id)
    .then(tarea => {
        if (tarea) {
            Object.assign(tarea, req.body)
            tarea.save()
            .then(tarea => {
                res.status(200).json(tarea)
            })
        }
        else res.status(404).json("Tarea no encontrado")
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
}

function eliminarTarea(req, res) {
    Tarea.findByPk(req.params.id)
    .then(tarea => {
        if (tarea) {
            tarea.destroy()
            .then(() => {
                res.status(200).json({})
            })
        } else {
            res.status(404).json("Tarea no encontrado")
        }
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
}





module.exports = {
    crearTarea,
    listarTareas,
    leerTarea,
    modificarTarea,
    eliminarTarea
}