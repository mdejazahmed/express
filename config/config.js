export default {
  jwtSecret: process.env.JWT_SECRET || 'defaultsecret',
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT || 5000,
};
