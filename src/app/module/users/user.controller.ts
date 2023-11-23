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

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUserFromDB();
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

export const userController = {
  createUser,
  getUser,
};
