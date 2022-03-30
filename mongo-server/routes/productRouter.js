const productController = require('../controller/productController');
const express = require('express');

const router = express.Router();

router.get('/', productController.getAllProduct);
router.get('/:id', productController.getProduct);
router.post('/', productController.addProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.delete('/', productController.deleteAllProduct);

module.exports = router;
