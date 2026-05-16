import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: String, required: true },
  LinkedinProfile: { type: String },
  GitHubProfile: { type: String },
  experience: { type: Number },
  resume: { type: String },
  coverletter: { type: String },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
});

export default mongoose.model("Applications", ApplicationSchema);
