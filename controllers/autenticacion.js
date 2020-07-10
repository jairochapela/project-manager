const {Usuario} = require('../models')

function login(req, res) {
    const {email, password} = req.params;
    Usuario.findOne({email, password})
    .then(usuario => res.redirect('/login'))
}


module.exports = {
    login
}