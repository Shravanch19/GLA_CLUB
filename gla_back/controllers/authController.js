import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    res.json({ token, user: { email: user.email } });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const register = async (req, res) => {
  const { uniId, password, email, Name, branch, year, mobile } = req.body;

  try {
    const exists = await User.findOne({ uniId });
    if (exists) return res.status(400).json({ message: "User exists" });

    const user = await User.create({ uniId, password, email, Name, branch, year, mobile });
    const token = generateToken(user._id);

    res.status(201).json({ token, user: { UniId: user.UniId } });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
