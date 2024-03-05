import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", (req, res) => {
  res.send("Welcome to hotel site backend");
});
app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
