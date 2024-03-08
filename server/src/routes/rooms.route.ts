import express from "express";
import { AddRoom, GetRooms } from "../controllers/room.controller";
const roomRouter = express();

roomRouter.get("/", GetRooms);
roomRouter.post("/add", AddRoom);

export { roomRouter };
