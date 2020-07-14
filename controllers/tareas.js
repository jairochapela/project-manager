const { Tarea } = require("../models");
const moment = require("moment")

function mostrarTarea(req, res) {
    const id = req.params.id;
    Tarea.findByPk(id)
    .then(tarea => {
        // tarea.fechaInicio = moment(tarea.fechaInicio).format("DD/MM/YYYY")
        // if (tarea.fechaVencimiento) {
        //     tarea.fechaVencimiento = moment(tarea.fechaVencimiento).format("DD/MM/YYYY")
        // }
        // if (tarea.fechaFin) {
        //     tarea.estado = "Finalizada"
        //     tarea.fechaFin = moment(tarea.fechaFin).format("DD/MM/YYYY")
        // } else {
        //     tarea.estado = "Pendiente"
        // }
        res.render('tarea', {
            tarea: {
                estado: tarea.fechaFin? "Finalizado" : "Pendiente",
                fechaInicio: moment(tarea.fechaInicio).format("DD/MM/YYYY"),
                fechaFin: tarea.fechaFin && moment(tarea.fechaFin).format("DD/MM/YYYY"),
                fechaVencimiento: tarea.fechaVencimiento && moment(tarea.fechaVencimiento).format("DD/MM/YYYY"),    
            }
        })
    })
}

module.exports = {
    mostrarTarea
}