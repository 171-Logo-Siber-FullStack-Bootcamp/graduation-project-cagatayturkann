const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ProductSchema = new Schema({
	name: String,
	description: String,
	// image: String,
	category: {
		type: String,
		lowercase: true,
		enum: [
			'shoes',
			'hoodies',
			'computers',
			'books',
			'kitchen',
			'mobiles',
			'cars',
			'televisions',
			'movies',
			'games',
		],
	},
	dateCreated: {
		type: Date,
		default: Date.now,
	},
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
