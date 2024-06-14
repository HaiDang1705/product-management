const systemConfig = require("../../config/system");
// Nhúng route dashboard
const dashboardRoutes = require("./dashboard.route");
const productRoutes = require("./product.route");
// Xuất ra
module.exports = (app) => {
    const PATH_ADMIN = systemConfig.prefixAdmin;

    app.use(PATH_ADMIN + "/dashboard", dashboardRoutes);
    app.use(PATH_ADMIN + "/products", productRoutes);
}