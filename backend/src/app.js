const express = require('express');
const cors = require('cors');
const wishRoutes = require('./routes/wishRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Wedding Wish Wall API is running',
  });
});

// ⭐ ROUTES
app.use('/api/wishes', wishRoutes);

// ⭐ DEBUG ROUTE (วางตรงนี้)
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'API WORKING 100%'
  });
});


// ⭐ GLOBAL ERROR HANDLER (ต้องอยู่ล่างสุดเสมอ)
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);

  res.status(500).json({
    success: false,
    message: err.message || "Server crash"
  });
});

module.exports = app;
