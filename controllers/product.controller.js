const Product = require("../models/Product");

module.exports.getProduct = async (req, res, next) => {
    try {
        const products = await Product
            .where('name').equals(/\w/);
        res.status(200).json({
            status: 'Success',
            data: products
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: 'Can not get data',
            error: error.message,
        })
    }
}

module.exports.createProduct = async (req, res, next) => {
    try {
        const product = new Product(req.body);
        const result = await product.save();

        // const result = await Product.create(req.body);
        res.status(200).json({
            status: "Success",
            message: "Data inserted successfully",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Data is not inserted",
            error: error.message
        });
    }
};