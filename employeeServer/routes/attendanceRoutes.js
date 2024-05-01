import express from "express";
import {
  attendencepost,
  getattendencedate,
  getattendencereportallemployee,
} from "../controller/attendanceController.js";
const route = express.Router();
route.post("/markattendance", attendencepost);
route.get("/getattendancedata", getattendencedate);
route.get("/getattendanceallemployeetotals", getattendencereportallemployee);

export default route;
