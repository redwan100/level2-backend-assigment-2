import { userController } from "./user.controller";
import express from "express";
const userRouter = express.Router();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getAllUser);
userRouter.get("/:userId", userController.getUser);
userRouter.patch("/:userId", userController.updateUser);

export default userRouter;
