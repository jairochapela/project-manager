require('dotenv').config()
const express = require('express')
var cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')

const {login, controlAcceso} = require('./controllers/autenticacion')
const {dashboard} = require('./controllers/dashboard')
const {mostrarTarea, registrarAccionTarea} = require('./controllers/tareas')

const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(cookieParser())
app.use(cookieSession({
    name: 'cookiesession',
    keys: [process.env.KEY1, process.env.KEY2],
    maxAge: process.env.DURACION_COOKIE * 60 * 1000
}))

// view engine setup
app.set('views', './views')
app.set('view engine', 'ejs')

// definición de las rutas
app.get('/', controlAcceso("leer-tareas-asignadas"), dashboard)
app.get('/login', (req, res) => res.render('login'))
app.post('/login', login)

app.get('/tareas/:id', mostrarTarea)
app.post('/tareas/:id', registrarAccionTarea)

app.listen(3000)