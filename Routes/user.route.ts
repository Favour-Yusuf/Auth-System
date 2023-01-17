import { Router } from "express";
import { getUser, login, register } from "../Controller/User.controller";

const router = Router();

router.route("/register").post(register);
router.route("/").get(getUser);
router.route("/login").get(login);

export default router;
