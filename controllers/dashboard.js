function dashboard(req, res) {
    const usuario = req.session.usuario;

    // if (usuario) {
        res.render('dashboard', {usuario})
    // } else {
    //     res.redirect('/login')
    // }
}


module.exports = {
    dashboard
}