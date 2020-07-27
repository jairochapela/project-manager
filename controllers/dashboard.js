const { Usuario, Tarea } = require("../models");
const moment = require("moment");


/**
 * Esta función es un controlador de Express que se encarga de mostrar las
 * tareas asignadas a un usuario en concreto.
 * 
 * @param {*} req Contiene los datos de la petición, entre los cuales está el
 * ID del usuario.
 * @param {*} res Respuesta a la petición.
 */
function dashboard(req, res) {
    const usuario = req.session.usuario;

    Usuario.findByPk(usuario.id, {
        include: {model: Tarea, as: 'tareas'}
    })
    .then(usuario => {
        const tareas = usuario.tareas.map(tarea => {
            return {
                nombre: tarea.nombre,
                link: "/tareas/" + tarea.id,
                fechaInicio: moment(tarea.fechaInicio).format("DD/MM/YYYY"),
                fechaVencimiento: tarea.fechaVencimiento && moment(tarea.fechaVencimiento).format("DD/MM/YYYY")
            }
        });
    
        res.render('dashboard', {usuario, tareas})
    })
    
}


module.exports = {
    dashboard
}