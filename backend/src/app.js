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

app.use('/api/wishes', wishRoutes);

module.exports = app;
