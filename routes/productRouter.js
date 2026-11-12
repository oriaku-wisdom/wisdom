const router = require('express').Router();

const { addProduct, updateProduct, getOneProduct,deleteProduct, getAllproducts } = require('../controller/productController');

const upload = require('../middleware/multer');

router.post('/product', upload.single('productImage'), addProduct);

router.get('/allproduct', getAllproducts);

router.get('/product/:id', getOneProduct);

router.patch('/product/:id', upload.single('productImage'), updateProduct);

router.delete('/product/:id', upload.single('productImage'),deleteProduct);

module.exports = router;