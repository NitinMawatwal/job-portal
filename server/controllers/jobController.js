import Job from "../models/Job.js";

export const postJobController = async (req, res) => {
  try {
    const newjob = new Job(req.body);
    newjob.save();
    res.json({ message: "job posted woowwww", success: 1 });
  } catch {
    res.json({ success: 0 });
  }
};

export const getalljobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    console.log(jobs);
    res.json(jobs);
  } catch (error) {
    console.log("error in fetching Jobs", error);
    res.json({ message: "jobs not fetched" });
  }
};

export const getmyjobs = async (req, res) => {
  try {
    const recruiterId = req.params.userId;
    const jobs = await Job.find({ recruiterId });
    res.json(jobs);
  } catch (error) {
    console.log("error in my jobs fetching:", error);
    res.status(500).json({ message: "problem in backend fetching jobs" });
  }
};
export const editjob = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedjob = await Job.findByIdAndUpdate(_id, req.body);
    res.json({ success: 1, message: "Successfuly update the job" });
  } catch (error) {
    res.json({ success: 0, message: "failed to update the job" });
  }
};

export const deletejob = async (req, res) => {
  try {
    const _id = req.params.id;
    // Correct filter object for deleteOne
    const result = await Job.deleteOne({ _id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ success: 0, message: "Job not found" });
    }
    res.json({ success: 1, message: "Successfully deleted the job" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: 0, message: "Failed to delete the job" });
  }
};
