// Utility function to generate a token
export const generateToken = (user) => {
    return jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      JWT_SECRET,
      { expiresIn: '1h' } // Token expiration time
    );
  };