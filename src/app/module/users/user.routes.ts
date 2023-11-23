import { userController } from "./user.controller";
import express from "express";
const userRouter = express.Router();

userRouter.post("/", userController.createUser);

export default userRouter;
