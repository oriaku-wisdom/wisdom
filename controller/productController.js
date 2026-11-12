const { product } = require('../models');
const fs = require('fs');

exports.addProduct = async (req, res) => {
    try {
        const { productName, price, stock } = req.body;

       
        const file = req.file.path;

        const goodproduct = await product.create({
            productName,
            price,
            stock,
            productImage: file
        });

        res.status(201).json({
            message: 'product Added Successfully',
            data: goodproduct
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getOneProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const oneproduct = await product.findByPk(id);

        if (!oneproduct) {
            return res.status(404).json({
                message: 'product not found'
            });
        }

        res.status(200).json({
            message: 'product found',
            data: oneproduct
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

 exports.getAllproducts = async (req, res) => {
    try {
        const products= await product.findAll();
        res.status(200).json({
            message: ` the Total number of products is ${products.length}`,
              data: products
        });
} catch (error) {
        res.status(500).json({
            error: error.message
        })
    
    
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { productName, stock, price } = req.body;

        const goodproduct = await product.findByPk(id);

        if (!goodproduct) {
            return res.status(404).json({
                message: 'product not found'
            });
        }

        const data = {
            price,
            productName,
            stock
        };

      

        if (req.file) {
            const oldFilePath = goodproduct.productImage;
            fs.unlinkSync(oldFilePath);
            data.productImage = req.file.path;
        }

        await goodproduct.update(data);

        res.status(200).json({
            message: "product Updated",
            data: goodproduct
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const goodproduct = await product.findByPk(id);

    if (!goodproduct) {
      return res.status(404).json({ message: 'product not found' });
    }

    const oldFilePath = goodproduct.productImage;
    fs.unlinkSync(oldFilePath);

    await product.destroy({ where: { id } });

    res.status(200).json({ 
        message: 'product deleted' 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
