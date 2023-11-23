import { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./app/module/users/user.routes";

const app: Application = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
