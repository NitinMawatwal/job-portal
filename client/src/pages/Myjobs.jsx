import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import JobDisplay from "../components/JobDisplay";

const Myjobs = ({ user }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchmyjobs = async () => {
      try {
        const myjobs = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/jobs/myjobs/${user._id}`
        );
        console.log("my jobs are:", myjobs.data);
        setJobs(myjobs.data);
        setLoading(false);
      } catch (error) {
        console.log("Jobs cannot be fetched", error);
        setLoading(false);
      }
    };
    fetchmyjobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 m-6">
        Your Active Job Listings
      </h2>
      <div className=" grid md:grid-cols-2 gap-4 m-4">
        {jobs.length === 0 ? (
          <p>No jobs found</p>
        ) : (
          jobs.map((job) => (
            <div key={job._id}>
              <JobDisplay job={job} user={user} />{" "}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Myjobs;
