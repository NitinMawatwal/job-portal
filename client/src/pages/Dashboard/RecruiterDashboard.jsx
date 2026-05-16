import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JobDisplay from "../../components/JobDisplay";

const RecruiterDashboard = ({ user }) => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyJobs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/jobs/myjobs/${user._id}`
      );
      setJobs(response.data);
    } catch (error) {
      console.error("Jobs cannot be fetched", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user?._id) return; // wait for user to be ready

    fetchMyJobs(); // initial fetch

    const interval = setInterval(fetchMyJobs, 5000); // fetch every 5 sec

    return () => clearInterval(interval); // cleanup on unmount
  }, [user]);

  return (
    <div className="p-6 min-h-screen bg-[#F4F2EE]">
      {/* Recruiter Profile Card */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-200 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Welcome, {user.name}! 👋
        </h1>
        <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
          <p>
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Company:</span>{" "}
            {user.companyName || "Not Provided"}
          </p>
          <p>
            <span className="font-semibold">Role:</span>{" "}
            {user.userType?.toUpperCase()}
          </p>
        </div>
      </div>

      {/* Post Job Button */}
      <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700">
          Your Posted Jobs
        </h2>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          onClick={() => navigate("/post/job")}
        >
          + Post New Job
        </button>
      </div>

      {/* Job Cards */}
      {loading ? (
        <p className="text-gray-500 text-center">Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className="text-center text-gray-600">No jobs posted yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {jobs.map((job) => (
            <JobDisplay key={job._id} job={job} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecruiterDashboard;
