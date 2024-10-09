import { configDotenv } from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import colors from "colors"
configDotenv()
const PORT = process.env.PORT || 8000;


// Connect to Database
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running in on port ${PORT}`.green.bold);
});