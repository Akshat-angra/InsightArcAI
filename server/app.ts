require("dotenv").config();
import express, { Request, Response, NextFunction } from "express";
export const app = express();
import cors from "cors";
import cookieparser from "cookie-parser";
import exp from "constants";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
// body parser
app.use(express.json({ limit: "50mb" }));

// cookie-parser

app.use(cookieparser());

// cors => cross origin resource sharing

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

// routes

app.use("/api/v1", userRouter);
app.use("/api/v1", courseRouter);

// testing api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Api is started and working",
  });
});

// unknown route

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(ErrorMiddleware);
