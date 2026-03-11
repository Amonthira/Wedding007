require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

const startServer = async () => {
  try {

    await connectDB();

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
      console.log("✅ SERVER STARTED ON PORT:", PORT);
    });

  } catch (err) {
    console.error("❌ SERVER START FAILED:", err);
  }
};

startServer();
