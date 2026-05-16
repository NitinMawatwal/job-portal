import Application from "../models/Application.js";

export const applyJobController = async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    newApplication.save();
    res.json({ message: "Job applied Successfully", app: newApplication });
  } catch (error) {
    console.log("error in getting jobs application", error);
    res.json({ message: "error in applying for jobs" });
  }
};
