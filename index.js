const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('NSE Proxy Server is running 🚀');
});

app.get('/api/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol.toUpperCase();

  try {
    const response = await axios.get(`https://www.nseindia.com/api/quote-equity?symbol=${symbol}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Referer': `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching stock data for ${symbol}:`, error.message);
    res.status(500).json({ error: 'Failed to fetch stock data. Try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
