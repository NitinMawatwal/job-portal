import React, { useEffect, useState } from "react";
import axios from "axios";
import jobDisplay from "./JobDisplay";
import JobDisplay from "./JobDisplay";

const JobList = ({ user }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/jobs/getall`
        );
        setJobs(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => <JobDisplay job={job} user={user} key={job._id} />)
      )}
    </div>
  );
};

export default JobList;
