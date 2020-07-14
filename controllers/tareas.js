function mostrarTarea(req, res) {
    const id = req.params.id;
    res.send("Tarea " + id);
}

module.exports = {
    mostrarTarea
}