const axios = require('axios');
const https = require('https');

const agent = new https.Agent({  
  keepAlive: true,
  rejectUnauthorized: false,
});

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
  'Accept': 'application/json',
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.nseindia.com',
  'Connection': 'keep-alive',
};

const response = await axios.get(
  `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`,
  {
    headers,
    httpsAgent: agent,
    timeout: 10000 // 10s timeout
  }
);
