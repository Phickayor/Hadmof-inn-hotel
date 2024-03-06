"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var db_config_1 = require("./src/config/db.config");
var auth_route_1 = require("./src/routes/auth.route");
require("dotenv").config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
(0, db_config_1.connectToDb)();
app.use("/auth", auth_route_1.authrouter);
app.all("*", function (req, res) {
    res.send("Route does not exist");
});
app.use("/auth", auth_route_1.authrouter);
app.all("*", function (req, res) {
    res.send("Route does not exist");
});
app.listen(8080, function () {
    console.log("server is listening on port 8080");
});
