const express = require("express");

const app = express();
const db = require('./db');

const OrderController = require("./Orders/OrderController");
app.use("/orders",OrderController);

const DashboardController = require("./Dashboard/DashboardController");
app.use("/Dashboard",DashboardController);


module.exports = app;

