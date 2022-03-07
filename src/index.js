/**
 * Punto inicial de la aplicación
 */

const server = require('./config/server');

// Si se encuentra en producción, no utiliza el paquete dotenv
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const port = process.env.PORT || 4000;

// Iniciar el servidor
server.initServer(port);
