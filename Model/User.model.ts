import { Schema, model } from "mongoose";

interface userData {
  email: string;
  password: string;
  fullname: string;
  stack: string;
}

interface userSchema extends userData, Document {}

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "please enter your email"],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
      min: [6, "please enter at least 6 characters"],
    },
    fullname: {
      type: String,
      required: [true, "please enter your fullname"],
    },
    stack: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = model<userSchema>("User", userSchema);
export default UserModel;
