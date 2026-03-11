const express = require('express');
const cors = require('cors');
const wishRoutes = require('./routes/wishRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API running',
  });
});

app.use('/api/wishes', wishRoutes);

app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);

  res.status(500).json({
    success: false,
    message: err.message || "Server crash"
  });
});

module.exports = app;
