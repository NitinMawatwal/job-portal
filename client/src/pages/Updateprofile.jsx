import React, { useState } from "react";
import axios from "axios";

const UpdateApplicantProfile = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    education: user.applicantProfile?.education || "",
    skills: user.applicantProfile?.skills || "",
    experience: user.applicantProfile?.experience || "",
    resumeLink: user.applicantProfile?.resumeLink || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = {
        ...user,
        applicantProfile: {
          ...user.applicantProfile,
          ...formData,
        },
      };
      console.log("data sent by update is ", updatedUser);
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/user/update/${user._id}`,
        updatedUser
      );

      setUser(response.data.updateuser); // Update context or parent state
      alert("Profile updated successfully");
      console.log("after updating thae data returned is ", user);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white rounded shadow-md w-[400px]"
        >
          <h2 className="text-xl font-semibold mb-4">
            Update Applicant Profile
          </h2>

          <label>Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 border mb-3"
          />

          <label>Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-2 border mb-3"
          />

          <label>Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 border mb-3"
          />

          <label>Resume Link</label>
          <input
            type="text"
            name="resumeLink"
            value={formData.resumeLink}
            onChange={handleChange}
            className="w-full p-2 border mb-4"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Update
          </button>
        </form>
        <h2>{user._id}</h2>
      </div>
    </>
  );
};

export default UpdateApplicantProfile;
