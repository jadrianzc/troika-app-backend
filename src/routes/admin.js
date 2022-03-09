const express = require('express');
const admin = express.Router();
const modeloMecanicos = require('../models/ModeloMecanicos');
const modeloRepuestos = require('../models/ModeloRepuestos');

////////////////////////////////////////////////////// ADMINISTRADOR //////////////////////////////////////////////////////

// Panel inicial
admin.get('/', async (req, res) => {
	res.render('index');
});

// Formulario de ingreso de mecánicos
admin.get('/formMecanicos', async (req, res) => {
	const documentos = await modeloMecanicos.find().lean();
	res.render('formMecanicos', { documentos: documentos });
});

admin.post('/formMecanicos', async (req, res) => {
	const documento = new modeloMecanicos(req.body);
	await documento.save();

	res.redirect('formMecanicos');
});

// Formulario de ingreso de repuestos
admin.get('/formRepuestos', async (req, res) => {
	res.render('formRepuestos');
});

admin.post('/formRepuestos', async (req, res) => {
	const documento = new modeloRepuestos(req.body);
	await documento.save();

	res.redirect('formRepuestos');
});

module.exports = admin;
