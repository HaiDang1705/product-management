// Trang chủ sản phẩm
module.exports.index = (req, res) => {
    res.render("client/pages/products/index.pug");
}

// Create
module.exports.create = (req, res) => {
    res.render("client/pages/products/create.pug");
}

// Delete
module.exports.delete = (req, res) => {
    res.render("client/pages/products/delete.pug");
}