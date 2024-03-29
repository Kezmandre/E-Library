import JWT from "jsonwebtoken";
import UserModel from "../Models/User.js";
import httpStatus from "http-status";
import { config } from "../Config/config.js";

export const userVerification = async (req, res, next) => {
  try {
    if (
      !req.headers ||
      !req.headers.authorization ||
      !req.headers.authorization.includes("Bearer")
    ) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        message: "Not authorized, no token",
      });
      return;
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = JWT.verify(token, config.jwt.jwt_secret);
    const user = await UserModel.findById({ _id: decoded.id });
    if (!user) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        message: "user not found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: error.message,
    });
  }
};

export const Authorized = (permittedRoles) => {
  return (req, res, next) => {
    if (!permittedRoles.includes(req.user.role)) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        message: `user with the role ${req.user.role} is not permitted on this route`,
      });
      return;
    }
    next();
  };
};
