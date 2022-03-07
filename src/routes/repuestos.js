const express = require('express');
const repuestos = express.Router();
const modeloRepuestos = require('../models/ModeloRepuestos');
const nodemailer = require('nodemailer');

////////////////////////////////////////////////////// REPUESTOS /////////////////////////////////////////

// Obetener datos
repuestos.get('/', async (req, res) => {
	const documentos = await modeloRepuestos.find();
	res.json(documentos);
});

repuestos.get('/:id', async (req, res) => {
	const documentos = await modeloRepuestos.find({ codigo: req.params.id });
	//console.log(documentos);
	res.json(documentos);
});

// Enviar datos
repuestos.post('/', async (req, res) => {
	//   const f_creacion_usuario = new Date().toLocaleString("es-EC");
	const date = new Date();

	let f_creacion_usuario =
		date.getFullYear() +
		'-' +
		(date.getMonth() + 1) +
		'-' +
		date.getDate() +
		' ' +
		date.getHours() +
		':' +
		date.getMinutes() +
		':' +
		date.getSeconds();

	const imgurl =
		'https://res.cloudinary.com/troikafoto/image/upload/v1629124545/User/5-08_p4m8t8.jpg';

	const {
		nomb_usuario,
		apell_usuario,
		ced_usuario,
		telf_usuario,
		cel_usuario,
		email_usuario,
		contraseña_usuario,
		conf_contraseña,
		rol_usuario,
	} = req.body;
	const documento = new modeloRepuestos({
		imgurl,
		nomb_usuario,
		apell_usuario,
		ced_usuario,
		telf_usuario,
		cel_usuario,
		email_usuario,
		contraseña_usuario,
		conf_contraseña,
		f_creacion_usuario,
		rol_usuario,
	});
	await documento.save();

	res.json({ status: 'Guardado' });
});

// Eliminar datos
// repuestos.delete('/:id', async (req, res) => {
// 	await modeloRepuestos.findByIdAndRemove(req.params.id);

// 	res.json({ status: 'Eliminado' });
// });

module.exports = repuestos;
