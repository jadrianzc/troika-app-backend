const express = require('express');
const mecanicos = express.Router();
const modeloMecanicos = require('../models/ModeloMecanicos');

////////////////////////////////////////////////////// REPUESTOS //////////////////////////////////////////////////////

// Obetener datos
mecanicos.get('/', async (req, res) => {
	const documentos = await modeloMecanicos.find().lean();
	res.json(documentos);
});

// mecanicos.get('/:id', async (req, res) => {
// 	const documentos = await modeloMecanicos.find({ nombre: req.params.id });
// 	//console.log(documentos);
// 	res.json(documentos);
// });

// Enviar datos
// mecanicos.post('/', async (req, res) => {
// 	console.log(req.body);
// 	const documento = new modeloMecanicos(req.body);
// 	await documento.save();

// 	res.json({ status: 'Guardado' });
// });

module.exports = mecanicos;
