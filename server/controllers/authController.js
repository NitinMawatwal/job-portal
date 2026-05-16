import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      userType,
      applicantProfile,
      recruiterProfile,
    } = req.body;

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists with this email" });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password,
      userType,
      applicantProfile,
      recruiterProfile,
    });
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (err) {
    console.error("Registration error:", err.message);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password match (no hashing used)
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Success
    res.status(200).json({
      message: "Login successful",
      user: user,
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

export const updateUserProfile = async (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;

  console.log("Updating user:", userId);
  console.log("Data received:", updatedData);

  try {
    const user = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User updated successfully", updateuser: user });
  } catch (err) {
    console.error("Backend update error:", err.message);
    res
      .status(500)
      .json({ message: "Failed to update user", error: err.message });
  }
};
