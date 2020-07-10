const {Usuario} = require('./models')

function login(req, res) {
    const {email, password} = req.body;
    Usuario.findOne({email, password})
    .then(usuario => res.json(usuario))
}


module.exports = {
    login
}