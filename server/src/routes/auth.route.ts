import express from "express";
import {
  accessPayload,
  login,
  registerAUser
} from "../controllers/auth.controller";
const authrouter = express();

authrouter.post("/register", registerAUser);
authrouter.post("/login", login);

export { authrouter };
