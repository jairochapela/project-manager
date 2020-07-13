function dashboard(req, res) {
    const usuario = req.session.usuario;

    res.render('dashboard', {usuario})
}


module.exports = {
    dashboard
}