import mongoose from "mongoose";
import { User } from "./users/user.interface";
// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema<User>({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
    trim: true,
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, "firstName is required"],
    },
    lastName: {
      type: String,
      required: [true, "firstName is required"],
    },
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  age: {
    type: Number,
    required: [true, "age is required"],
  },
  hobbies: {
    type: [String],
    default: [],
  },
  address: {
    street: {
      type: String,
      required: [true, "street is required"],
    },
    city: {
      type: String,
      required: [true, "city is required"],
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

//Export the model
export const user = mongoose.model("User", userSchema);
