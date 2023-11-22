import { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app: Application = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
