import React, { useState } from "react";
import axios from "axios";

const Editjob = ({ job }) => {
  const [editedJob, setEditedJob] = useState(job); // ✅ Make a copy to edit
  const [message, setMessage] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEditedJob((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault(); // ✅ You forgot to include this
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/jobs/edit/${job._id}`,
        editedJob
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error("Edit failed", error);
      setMessage("Failed to edit the job.");
    }
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col text-xl p-6 rounded-xl"
      >
        <label className="py-2">Title</label>
        <input
          type="text"
          name="title"
          value={editedJob.title}
          onChange={changeHandler}
          placeholder="Software Developer Intern"
          required
        />

        <label className="py-2">Job Description</label>
        <textarea
          name="description"
          value={editedJob.description}
          onChange={changeHandler}
          required
        />

        <label className="py-2">Location</label>
        <select
          name="location"
          value={editedJob.location}
          onChange={changeHandler}
          required
        >
          <option value="" disabled>
            --Select a location--
          </option>
          <option value="Work From Home">Work From Home</option>
          <option value="Delhi">Delhi</option>
          <option value="Gurugram">Gurugram</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Banglore">Banglore</option>
          <option value="Mumbai">Mumbai</option>
        </select>

        <label className="py-2">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={editedJob.companyName}
          onChange={changeHandler}
          required
        />

        <label className="py-2">Job Type</label>
        <select
          name="jobType"
          value={editedJob.jobType}
          onChange={changeHandler}
          required
        >
          <option value="" disabled>
            --Job Type--
          </option>
          <option value="Full-Time">Full Time</option>
          <option value="Part-Time">Part Time</option>
          <option value="Apprenticeship">Apprenticeship</option>
          <option value="Internship">Internship</option>
          <option value="Traineeship">Traineeship</option>
          <option value="Contract">Contract</option>
        </select>

        <label className="py-2">Salary</label>
        <input
          type="number"
          name="salary"
          value={editedJob.salary}
          onChange={changeHandler}
          required
        />

        <button
          type="submit"
          className="bg-green-400 text-white p-2 mt-8 font-bold"
        >
          Edit Job
        </button>
      </form>

      {message && (
        <h1 className="text-center text-green-600 font-semibold mt-4">
          {message}
        </h1>
      )}
    </div>
  );
};

export default Editjob;
