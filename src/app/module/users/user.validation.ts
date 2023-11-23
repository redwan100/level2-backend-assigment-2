import { z } from "zod";

// Define the Zod schema
const addressSchema = z.object({
  street: z.string().min(1).max(30),
  city: z.string().min(1),
});

const fullNameSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

const userZodSchema = z.object({
  username: z.string().min(2).max(30),
  fullName: fullNameSchema,
  userId: z.number(),
  email: z.string().min(3),
  password: z.string().min(4).max(40),
  age: z.number(),
  hobbies: z.array(z.string()),
  address: addressSchema,
  isActive: z.boolean().default(true),
});

export const zodValidationSchema = {
  userZodSchema,
};
