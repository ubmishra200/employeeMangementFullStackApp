import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./routes/userRoutes.js";
import attendanceroute from "./routes/attendanceRoutes.js";
import mongodbconnect from "./config/dbconfig.js";

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Database connection
mongodbconnect();

// Routes
app.use("/api/v1/user", router);
app.use("/api/v1/attendance", attendanceroute);

// Default route
app.get("/", (req, res) => {
  return res.send("hello server start");
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
