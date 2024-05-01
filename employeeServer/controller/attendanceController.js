import moment from "moment";
import attendenceModel from "../models/attendanceModels.js";
import userModels from "../models/userModels.js";

export const attendencepost = async (req, res) => {
  try {
    const { employeeName, phoneNumber, date, status } = req.body;
    console.log(date);
    const employeeexist = await userModels.findOne({ phoneNumber });
    if (!employeeexist) {
      return res.status(200).send({
        success: false,
        message: "Does not Exist PhoneNumber",
      });
    }

    const attendencedata = {
      employeeName,
      phoneNumber,
      date,
      status,
    };
    const dataattendence = await attendenceModel.create(attendencedata);
    res.send({
      message: "successfully attendence mark",
      success: true,
      dataattendence,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: "fail to mark",
    });
  }
};

export const getattendencedate = async (req, res) => {
  const date = req.query.date;
  console.log(`${date}`);

  try {
    const attendence = await attendenceModel.find({ date: date });

    return res.json({ attendence });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

//Dummmy data
export const getattendencereportallemployee = async (req, res) => {
  try {
    const { month, year } = req.query;
    console.log(month, year);

    console.log("Query parameters:", month, year);
    // Calculate the start and end dates for the selected month and year
    const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    const endDate = new Date(parseInt(year), parseInt(month), 0);

    // Aggregate attendance data for all employees and date range
    const report = await attendenceModel.aggregate([
      {
        $match: {
          date: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
      {
        $group: {
          _id: "$phoneNumber",
          present: {
            $sum: {
              $cond: { if: { $eq: ["$status", "present"] }, then: 1, else: 0 },
            },
          },
          absent: {
            $sum: {
              $cond: { if: { $eq: ["$status", "absent"] }, then: 1, else: 0 },
            },
          },
          halfday: {
            $sum: {
              $cond: { if: { $eq: ["$status", "halfday"] }, then: 1, else: 0 },
            },
          },
          holiday: {
            $sum: {
              $cond: { if: { $eq: ["$status", "holiday"] }, then: 1, else: 0 },
            },
          },
        },
      },
      {
        $lookup: {
          from: "users", // Name of the employee collection
          localField: "_id",
          foreignField: "phoneNumber",
          as: "employeeDetails",
        },
      },
      {
        $unwind: "$employeeDetails", // Unwind the employeeDetails array
      },
      {
        $project: {
          _id: 1,
          present: 1,
          absent: 1,
          halfday: 1,
          holiday: 1,
          name: "$employeeDetails.employeeName",
          designation: "$employeeDetails.designation",
          salary: "$employeeDetails.salary",
          phoneNumber: "$employeeDetails.phoneNumber",
        },
      },
    ]);

    res.status(200).json({ report });
  } catch (error) {
    console.error("Error generating attendance report:", error);
    res.status(500).json({ message: "Error generating the report" });
  }
};
