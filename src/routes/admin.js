const express = require('express');
const admin = express.Router();
const modeloMecanicos = require('../models/ModeloMecanicos');

////////////////////////////////////////////////////// ADMINISTRADOR /////////////////////////////////////

// Obetener datos
admin.get('/', async (req, res) => {
	res.render('index');
});

admin.get('/formMecanicos', async (req, res) => {
	const documentos = await modeloMecanicos.find().lean();
	res.render('formMecanicos', { documentos: documentos });
});

admin.post('/formMecanicos', async (req, res) => {
	console.log(req.body);
	const documento = new modeloMecanicos(req.body);
	await documento.save();

	res.redirect('formMecanicos');
});

admin.get('/formRepuestos', async (req, res) => {
	res.render('formRepuestos');
});

module.exports = admin;
