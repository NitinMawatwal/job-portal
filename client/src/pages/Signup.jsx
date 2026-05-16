import { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { setIsAuthorized, setUser } = useContext(Context);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
    applicantProfile: {
      education: "",
      experience: "",
      skills: [],
      resumeLink: "",
    },
    recruiterProfile: {
      companyName: "",
      designation: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending form data:", form);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        form
      );

      const { user } = response.data;
      setUser(user);
      setIsAuthorized(true);
      alert("Registered successfully");

      if (user.userType === "recruiter") {
        navigate("/dashboard/recruiter");
      } else {
        navigate("/dashboard/applicant");
      }
    } catch (err) {
      console.log(err);
      setIsAuthorized(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left Side - Welcome Message */}
        <div className="bg-green-400 md:w-1/2 flex flex-col justify-center items-center text-white p-10">
          <h1 className="text-4xl font-extrabold mb-4 text-center">
            Join NextHire
          </h1>
          <p className="text-center text-lg">
            At NextHire, we focus on your career growth and solving your
            job-related problems. Sign up and start your journey with us.
          </p>
        </div>

        {/* Right Side - Signup Form */}
        <div className="md:w-1/2 flex flex-col justify-center p-10">
          <h4 className="text-2xl font-semibold mb-6 text-gray-800">
            Create your account
          </h4>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Name</label>
              <input
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            {/* User Type */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                User Type
              </label>
              <select
                value={form.userType}
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setForm({ ...form, userType: e.target.value })}
              >
                <option value="" disabled>
                  -- Select User Type --
                </option>
                <option value="applicant">Applicant</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>

            {/* Recruiter Fields */}
            {form.userType === "recruiter" && (
              <>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        recruiterProfile: {
                          ...form.recruiterProfile,
                          companyName: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700">
                    Designation
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        recruiterProfile: {
                          ...form.recruiterProfile,
                          designation: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </>
            )}

            {/* Applicant Fields */}
            {form.userType === "applicant" && (
              <>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700">
                    Education
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        applicantProfile: {
                          ...form.applicantProfile,
                          education: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700">
                    Skills
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        applicantProfile: {
                          ...form.applicantProfile,
                          skills: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700">
                    Experience
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        applicantProfile: {
                          ...form.applicantProfile,
                          experience: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700">
                    Resume Link
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        applicantProfile: {
                          ...form.applicantProfile,
                          resumeLink: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="bg-green-400 text-white font-semibold text-lg py-2 rounded-xl hover:bg-green-500 transition-colors"
            >
              Sign Up
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-500 mt-2">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-green-400 font-medium hover:underline"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
