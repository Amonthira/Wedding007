require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

const startServer = async () => {
  try {

    await connectDB();

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, '0.0.0.0', () => {
      console.log("🚀 SERVER RUNNING ON PORT:", PORT);
    });

  } catch (err) {
    console.error("❌ SERVER START FAILED:", err);
  }
};

startServer();
