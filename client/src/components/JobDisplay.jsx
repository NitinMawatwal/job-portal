import { React, useState } from "react";
import { GiH2O } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Editjob from "./Editjob";

const JobDisplay = ({ job, user }) => {
  const navigate = useNavigate();
  const [editjob, seteditjob] = useState(null);

  const deleteHandler = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/jobs/delete/${job._id}`
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("An Error Occured", error);
    }
  };
  return (
    <>
      {" "}
      <div className="p-3 border border-black mb-3 bg-white min-h-64">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">{job.title}</h2>
        <p className="text-gray-700 mb-1">
          <strong>Company:</strong> {job.companyName}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Salary:</strong> ₹{job.salary}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          {job.description?.slice(0, 120)}...
        </p>

        {user?.userType === "applicant" && (
          <>
            <button
              className="text-white bg-green-400 p-2 rounded-3xl block my-1 mx-auto"
              onClick={() => {
                if (user?.userType === "applicant") {
                  navigate(`/apply/job/${job._id}`);
                } else {
                  navigate("/register");
                }
              }}
            >
              Apply Now
            </button>
          </>
        )}
        {user?.userType === "recruiter" && (
          <div className="flex flex-wrap gap-3">
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
              onClick={() => navigate(`/job/${job._id}/applicants`)}
            >
              View Applicants
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
              onClick={() => {
                seteditjob(job);
              }}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              onClick={() => {
                deleteHandler();
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      {editjob && <Editjob job={editjob} />}
    </>
  );
};

export default JobDisplay;
