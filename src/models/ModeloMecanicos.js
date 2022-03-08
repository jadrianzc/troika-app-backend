const { Schema, model } = require('mongoose');

const MecanicoSchemna = new Schema(
	{
		nombre: {
			type: String,
			trim: true,
			required: true,
		},
		apellido: {
			type: String,
			trim: true,
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = model('mecanicos', MecanicoSchemna);
