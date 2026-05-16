import React from "react";
import { useState } from "react";
import axios from "axios";
import hiring from "../assets/hiring.png";
import { useNavigate } from "react-router-dom";

const PostJob = ({ user }) => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    title: "",
    companyName: "",
    jobType: "",
    description: "",
    salary: 0,
    location: "",
    recruiterId: user._id,
  });
  const [message, setmessage] = useState("");
  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log("the job posted is as:", form);
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/jobs/post`,
      form
    );
    response.data.success
      ? navigate("/job/me")
      : setmessage("an error occured");
  };
  const changeHandler = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center p-8 ">
        <div className="bg-[#FFF5E1]">
          <img src={hiring} alt="HIRING" />
          <h1 className="text-2xl text-center pt-4">
            Ready to Hire? Let’s Post Your Job!
          </h1>
          <form
            onSubmit={SubmitHandler}
            className=" flex flex-col text-xl p-6 rounded-xl"
          >
            <label htmlFor="" className="py-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Software Developer Intern"
              onChange={changeHandler}
              name="title"
              required
            />
            <label htmlFor="" className="py-2">
              Job Description
            </label>
            <textarea
              value={form.description}
              onChange={changeHandler}
              name="description"
              required
            ></textarea>
            <label htmlFor="" className="py-2">
              Location
            </label>
            <select
              onChange={changeHandler}
              value={form.location}
              name="location"
              required
            >
              <option value="" disabled>
                --Select a location--
              </option>
              <option value="Work Form Home">Work From Home</option>
              <option value="Delhi">Delhi</option>
              <option value="Gurugram">Gurugram</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Banglore">Banglore</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <label htmlFor="" className="py-2">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              onChange={changeHandler}
              required
            />
            <label htmlFor="" className="py-2">
              Job Type
            </label>
            <select
              name="jobType"
              value={form.jobType}
              onChange={changeHandler}
              required
            >
              <option value="" disabled>
                {" "}
                --Job Type--{" "}
              </option>

              <option value="Full-Time">Full Time</option>
              <option value="Part-Time">Part Time</option>
              <option value="Apprenticeship">Apprenticeship</option>
              <option value="Internship">Internship</option>
              <option value="Traineeship">Traineeship</option>
              <option value="Contract">Contract</option>
            </select>
            <label htmlFor="" className="py-2">
              Salary
            </label>
            <input
              type="number"
              name="salary"
              onChange={changeHandler}
              required
            />
            <button
              type="submit"
              className="bg-green-400 text-white p-2 mt-8 font-bolder"
            >
              Post Job
            </button>
          </form>
          <h1>{message}</h1>
        </div>
      </div>
    </>
  );
};

export default PostJob;
