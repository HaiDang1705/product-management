// Nhúng route product
const productRoutes = require("./product.route");
const homeRoutes = require("./home.route");

// Xuất ra
module.exports = (app) => {

    app.use('/', homeRoutes);
    // routing products , controller là hàm
    app.use("/products", productRoutes);
}