// middleware/auth.js
import jwt from 'jsonwebtoken';

// Secret key to sign JWT tokens (You should store this in environment variables)
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to verify the JWT token
export const authenticateJWT = (req, res, next) => {
  // Get the token from the request header
  const token = req.headers.authorization?.split(' ')[1]; // Typically in the format 'Bearer <token>'
  
  if (!token) {
    return res.status(401).json({ message: "Access token is missing or invalid" });
  }

  try {
    // Verify the token and attach the decoded user data to the request object
    const decoded = jwt.verify(token,  process.env.JWT_SECRET);
    console.log(decoded)
    // Store user info (payload from token) in req object
    next();
  } catch (error) {
    console.log(error);
    
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};


