import User from "../models/userModel.js";


// @desc    Get all users
// @route   GET /api/users
// @access  Public

// get all users
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(
      users.map((user) => ({
        id: user._id,
        username: user.username,
        email: user.email,
      }))
    );
  } catch (error) {
    next(error);
  }
};
// get user by id
export const getUser = async (req, res, next) => {
  const { user_id } = req.params;
  try {
    const user = await User.findOne({ _id: user_id });
    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
};

