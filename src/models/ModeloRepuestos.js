const { Schema, model } = require('mongoose');

const RepuestosSchemna = new Schema(
	{
		codigo: {
			type: String,
			trim: true,
			required: true,
		},
		descripcion: {
			type: String,
			trim: true,
			required: true,
		},
		costo: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
	}
);

module.exports = model('repuestos', RepuestosSchemna);
