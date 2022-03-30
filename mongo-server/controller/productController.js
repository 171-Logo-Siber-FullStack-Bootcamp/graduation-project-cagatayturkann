const Product = require('../models/Product');

//get all products
const getAllProduct = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

//get product by ID
const getProduct = async (req, res) => {
	try {
		const productID = req.params.id;
		const product = await Product.findById(productID);
		res.status(200).json(product);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

//add product
const addProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(201).json({ message: 'Product added successfully!', product });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

//update product
const updateProduct = async (req, res) => {
	try {
		const productID = req.params.id;
		const newProductInfo = req.body;
		const product = await Product.findByIdAndUpdate(productID, newProductInfo);
		product.save();
		res.status(200).json({ messge: 'Post updated successfully!', product });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

//delete product
const deleteProduct = async (req, res) => {
	try {
		const productID = req.params.id;
		const product = await Product.findByIdAndDelete(productID);
		res.status(200).json({ message: 'Post deleted successfully!' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//delete all product
const deleteAllProduct = async (req, res) => {
	try {
		const products = await Product.remove({});
		res.status(200).json({ message: 'All products deleted successfully!' });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports = {
	getAllProduct,
	getProduct,
	addProduct,
	updateProduct,
	deleteProduct,
	deleteAllProduct,
};
