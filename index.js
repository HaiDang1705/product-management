const express = require('express');

// ENV
require("dotenv").config();

const database = require("./config/database");
database.connect();

const systemConfig = require("./config/system");

// Nhúng code chạy route vào
const route = require("./routes/client/index.route");
// 
const routeAdmin = require("./routes/admin/index.route");


const app = express();
const port = process.env.PORT;

// Cấu hình pug
app.set("views", "./views");
app.set("view engine", "pug");

// App local Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

// Nhúng file tĩnh
app.use(express.static("public"));

// ROutes - Gọi hàm
route(app);
routeAdmin(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

