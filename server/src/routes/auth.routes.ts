import express from "express";
const authrouter = express();

authrouter.post("/register");
authrouter.post("/login");

export { authrouter };
