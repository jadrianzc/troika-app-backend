const express = require('express');
const repuestos = require('./repuestos');
const mecanicos = require('./mecanicos');
const admin = require('./admin');

const router = express.Router();

// Ruta principal de la api
router.get('/', (req, res) => {
	res.status(200).json({
		message: 'Bienvenido a la API.',
	});
});

// Demás rutas
router.use('/repuestos', repuestos);
router.use('/mecanicos', mecanicos);
router.use('/admin', admin);

module.exports = router;
