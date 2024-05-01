import express from "express";
import {
  getuserprofile,
  userRegisterController,
} from "../controller/userController.js";
const router = express.Router();
router.post("/register", userRegisterController);

router.get("/getuser", getuserprofile);
export default router;
