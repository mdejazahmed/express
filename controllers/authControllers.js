import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// register user
export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  //   check if any required fields are missing
  if (!username || !email || !password) {
    res.status(400).json({ message: "Please fill all fields" });
  }
  //   check if user is already in db
  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(401).json("User already exist");
  }
  //   if not created already then create new user
  try {
    const user = await User.create({ username, email, password });
    // format response as frontend demands
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET
    );
    res.status(201).json({
      token,
    });
  } catch (error) {
    next(error);
  }
};

// login user
export const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log( process.env.JWT_SECRET);
  try {
    const user = await User.findOne({ username });
    // Compare the provided password with the hashed password stored in the database
    const isMatch = await user.comparePassword(password);
    if (user) {
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign(
        { id: user._id, username: user.username, email: user.email },
        process.env.JWT_SECRET
      );
      res.status(200).json({
        token,
      });
    } else {
      res.status(400).json("User doesn't exists");
    }
  } catch (error) {
    next(error);
  }
};
