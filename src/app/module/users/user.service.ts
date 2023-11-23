import { userModel } from "../user.model";
import { TUser } from "./user.interface";

const createUserIntoDB = async (user: TUser) => {
  const result = await userModel.create(user);
  return result;
};
const getUserFromDB = async () => {
  const result = await userModel.find();
  return result;
};

export const userService = {
  createUserIntoDB,
  getUserFromDB,
};
