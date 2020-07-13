const {Usuario} = require('../models');
const md5 = require('md5');

function login(req, res) {
    const {email, password} = req.body;

    Usuario.findOne({where: {email, password: md5(password)}})
    .then(usuario => {
      if (usuario) {
        req.session.usuario = usuario;
        res.redirect("/");
      } else {
        res.render("login", {mensaje: "Usuario o contraseña incorrectos."});
      }
    })
}


module.exports = {
    login
}