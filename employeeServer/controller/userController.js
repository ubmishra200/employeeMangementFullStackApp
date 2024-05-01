import userModels from "../models/userModels.js";

export const userRegisterController = async (req, res) => {
  try {
    const {
      employeeName,
      designation,
      joindate,
      salary,
      activeEmployee,
      phoneNumber,
      address,
    } = req.body;

    const newEmployee = await userModels.create({
      employeeName,
      designation,
      joindate,
      salary,
      activeEmployee,
      phoneNumber,
      address,
    });
    console.log(newEmployee);
    res.send({
      success: true,
      message: "Successfully Registered User",
      employee: newEmployee,
    });
  } catch (error) {
    console.log("Registration failed", error);
    res.status(500).send({
      message: "Registration failed",
      error: error.message,
      success: false,
    });
  }
};

export const getuserprofile = async (req, res) => {
  try {
    const employees = await userModels.find();
    res.send({
      employees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error occurred while fetching employees",
      error: error.message,
    });
  }
};
