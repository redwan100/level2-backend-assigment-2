import { Request, Response } from "express";
import { userService } from "./user.service";
import { zodValidationSchema } from "./user.validation";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    // schema validation
    const validData = zodValidationSchema.userZodSchema.parse(user);
    const result = await userService.createUserIntoDB(validData);
    res.status(201).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: "All Users successfully retrieved",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await userService.getUserFromDB(Number(userId));

    res.status(200).json({
      success: true,
      message: "User successfully retrieved",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updatedDoc = req.body;

    const result = await userService.updateUserFromDB(
      Number(userId),
      updatedDoc,
    );

    res.status(200).json({
      success: true,
      message: "User successfully retrieved",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};

export const userController = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
};
