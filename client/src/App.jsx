import React from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import RecruiterDashboard from "./pages/Dashboard/RecruiterDashboard";
import ApplicantDashboard from "./pages/Dashboard/ApplicantDashboard";
import { Routes, Route } from "react-router-dom";
import Updateprofile from "./pages/Updateprofile";
import { useContext } from "react";
import { Context } from "./main";
import Footer from "./components/Footer";
import PostJob from "./pages/PostJob";
import Myjobs from "./pages/Myjobs";
import ApplyJob from "./pages/ApplyJob";
import AllJobs from "./components/AllJobs";
import Editjob from "./components/Editjob";

const App = () => {
  const { setUser, user } = useContext(Context);
  return (
    <div className="bg-[#F4F2EE]">
      <div>
        <Navbar />
      </div>

      {/*  */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route
            path="/dashboard/recruiter"
            element={<RecruiterDashboard user={user} />}
          />
          <Route path="/dashboard/applicant" element={<ApplicantDashboard />} />
          <Route path="/post/job" element={<PostJob user={user} />} />
          <Route path="/job/getall" element={<AllJobs user={user} />} />
          <Route path="/job/me" element={<Myjobs user={user} />} />
          {/* <Route path="/job/edit/:_id" element={<Editjob job={} />} /> */}

          <Route path="/apply/job/:jobid" element={<ApplyJob />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
