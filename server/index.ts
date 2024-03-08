import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectToDb } from "./src/config/db.config";
import { authrouter } from "./src/routes/auth.route";
import { roomRouter } from "./src/routes/rooms.route";
require("dotenv").config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
connectToDb();

app.use("/auth", authrouter);
app.use("/rooms", roomRouter);
app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
