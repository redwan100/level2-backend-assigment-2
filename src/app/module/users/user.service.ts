import { userModel } from "../user.model";
import { TUser } from "./user.interface";

const createUserIntoDB = async (user: TUser) => {
  const result = await userModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await userModel.find();

  return result;
};

const getUserFromDB = async (userId: number) => {
  const result = await userModel.findOne({ userId: userId });
  return result;
};

export const userService = {
  createUserIntoDB,
  getAllUserFromDB,
  getUserFromDB,
};
