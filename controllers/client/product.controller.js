const Product = require("../../models/product.model");

// [GET] /products

// Trang chủ sản phẩm
module.exports.index = async (req, res) => {
    const products = await Product.find({
        status: "active",
        deleted: "false"
    });

    const newProducts = products.map(product => {
        product.priceNew = (product.price * (100 - product.discountPercentage) / 100).toFixed(0);
        return product;
    });

    console.log(newProducts);

    res.render("client/pages/products/index.pug", {
        pageTitle: "Trang sản phẩm",
        products: newProducts
    });
}

// Create
module.exports.create = (req, res) => {
    res.render("client/pages/products/create.pug");
}

// Delete
module.exports.delete = (req, res) => {
    res.render("client/pages/products/delete.pug");
}