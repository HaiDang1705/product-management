const express = require('express');

// ENV
require("dotenv").config();

const database = require("./config/database");
database.connect();

// Nhúng code chạy route vào
const route = require("./routes/client/index.route");


const app = express();
const port = process.env.PORT;

// Cấu hình pug
app.set("views", "./views");
app.set("view engine", "pug");

// Nhúng file tĩnh
app.use(express.static("public"));

// ROutes - Gọi hàm
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

