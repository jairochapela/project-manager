const { Usuario, Tarea } = require("../models");

function dashboard(req, res) {
    const usuario = req.session.usuario;

    Usuario.findByPk(usuario.id, {
        include: {model: Tarea, as: 'tareas'}
    })
    .then(usuario => {
        const tareas = usuario.tareas;
        res.render('dashboard', {usuario, tareas})
    })
    
}


module.exports = {
    dashboard
}