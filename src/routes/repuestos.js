const express = require('express');
const repuestos = express.Router();
const modeloRepuestos = require('../models/ModeloRepuestos');

////////////////////////////////////////////////////// REPUESTOS /////////////////////////////////////////

// Obetener datos
repuestos.get('/', async (req, res) => {
	const documentos = await modeloRepuestos.find();
	res.json(documentos);
});

repuestos.get('/:id', async (req, res) => {
	const documentos = await modeloRepuestos.find({ codigo: req.params.id });
	res.json(documentos);
});

// Enviar datos
// repuestos.post('/', async (req, res) => {
// 	const documento = new modeloRepuestos({
// 		codigo: 'D1661-SM',
// 		descripcion: 'Pastillas de freno',
// 		costo: '10.5',
// 	});
// 	await documento.save();

// 	res.json({ status: 'Guardado' });
// });

// Eliminar datos
// repuestos.delete('/:id', async (req, res) => {
// 	await modeloRepuestos.findByIdAndRemove(req.params.id);

// 	res.json({ status: 'Eliminado' });
// });

module.exports = repuestos;
