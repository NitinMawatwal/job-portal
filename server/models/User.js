import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  userType: { type: String, enum: ["recruiter", "applicant"], required: true },
  applicantProfile: {
    education: String,
    experience: String,
    skills: [String],
    resumeLink: String,
  },
  recruiterProfile: {
    companyName: String,
    designation: String,
  },
});

export default mongoose.model("User", userSchema);
