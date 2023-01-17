import { Request, Response } from "express";
import UserModel from "../Model/User.model";

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password, fullname, stack } = req.body;
    const user = await UserModel.create({
      email,
      password,
      fullname,
      stack,
    });
    return res.status(201).json({
      status: "succesful",
      data: user,
    });
  } catch (error) {
    return res.status(401).json({
      status: "Failed",
      data: error,
    });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Please enter an email" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found,please register" });
    }
    return res.status(200).json({
      status: "Successful",
      data: user,
    });
  } catch (error) {
    return res.status(401).json({
      status: "Failed",
      data: error,
    });
  }
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({
      message: `${users.length} user(s)`,
      data: users,
    });
  } catch (error) {
    return res.status(401).json({
      status: "Failed",
      data: error,
    });
  }
};
