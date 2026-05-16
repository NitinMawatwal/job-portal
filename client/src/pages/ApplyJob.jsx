import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ApplyJob = () => {
  const { jobid } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNo: "",
    LinkedinProfile: "",
    GitHubProfile: "",
    experience: "",
    coverletter: "",
    resume: null,
    jobId: jobid,
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("the param is", jobid);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/apply/job/${jobid}`,
        form
      );
      console.log(res.data.message);
      console.log(res.data.app);
    } catch (error) {
      console.log("error in applying to job", error);
    }
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={changeHandler}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={changeHandler}
        />

        <label>Phone No.</label>
        <input
          type="text"
          name="phoneNo"
          value={form.phoneNo}
          onChange={changeHandler}
        />

        <label>Experience</label>
        <select
          name="experience"
          value={form.experience}
          onChange={changeHandler}
        >
          <option value="0">Fresher</option>
          <option value="1">1+ Years</option>
          <option value="2">2+ Years</option>
          <option value="3">3+ Years</option>
          <option value="4">4+ Years</option>
          <option value="5">5+ Years</option>
        </select>

        <label>Linkedin Profile</label>
        <input
          type="text"
          name="LinkedinProfile"
          value={form.LinkedinProfile}
          onChange={changeHandler}
        />

        <label>GitHub Profile</label>
        <input
          type="text"
          name="GitHubProfile"
          value={form.GitHubProfile}
          onChange={changeHandler}
        />

        <label>Resume</label>
        <input type="text" name="resume" onChange={changeHandler} />

        <label>Cover Letter</label>
        <textarea
          name="coverletter"
          value={form.coverletter}
          onChange={changeHandler}
        ></textarea>
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
