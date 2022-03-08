/**
 * Configuración del servidor
 */
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const router = require('../routes/router');
const exphbs = require('express-handlebars');
const path = require('path');
const { getmongoose } = require('../config/database');

const initServer = (port) => {
	const app = express();

	// Settings
	app.set('port', process.env.PORT || 4000);
	app.set('views', path.join(__dirname, '../views'));

	// Para parsear JSONs
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));

	// Configuración motor de plantilla
	app.engine(
		'.hbs',
		exphbs({
			defaultLayout: 'main',
			layoutsDir: path.join(app.get('views'), 'layouts'),
			partialsDir: path.join(app.get('views'), 'partials'),
			extname: '.hbs',
		})
	);
	app.set('view engine', '.hbs');

	// Para seguridad básica
	app.use(helmet());

	// Utilizar CORS
	app.use(cors());

	// Para un registro más detallado de las peticiones
	app.use(morgan('tiny'));

	// Guardar base de datos
	app.locals.db = getmongoose();

	// Inicializar rutas de la API
	app.get('/', (req, res) => {
		res.redirect(301, '/api/v1/');
	});
	app.use('/api/v1/', router);

	// Server is listening
	app.listen(app.get('port'), () => {
		console.log(
			`Iniciado correctamente el servidor en el puerto: ${app.get('port')}`
		);
	});
};

module.exports = { initServer };
