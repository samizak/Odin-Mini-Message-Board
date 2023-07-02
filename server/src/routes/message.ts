import { Router } from "express";
import { getAllMessages, createNewMessage } from "../controllers/messageController";

export const messageRouter = Router();

messageRouter.route("/").get(getAllMessages);
messageRouter.route("/new").post(createNewMessage);
