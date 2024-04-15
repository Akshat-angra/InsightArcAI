import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "./catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redis } from "../utils/redis";

export const isAuthenticated = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Cookies:", req.cookies);
    const access_token = req.cookies.access_token as string;
    console.log("Access token : ", access_token);
    if (!access_token) {
      return next(
        new ErrorHandler("Please login to access this resource", 400)
      );
    }
    const decoded = jwt.verify(
      access_token,
      process.env.ACCESS_TOKEN as string
    ) as JwtPayload;
    console.log("Decoded Token: ", decoded);

    if (!decoded) {
      return next(new ErrorHandler("Access token is not valid", 400));
    }

    const user = await redis.get(decoded.id);
    console.log("Logged out User form Redis: ", user);

    if (!user) {
      return next(new ErrorHandler("User not found", 400));
    }

    req.user = JSON.parse(user);

    next();
  }
);
