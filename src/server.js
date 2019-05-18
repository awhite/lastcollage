const express = require('express');

const PORT = 8000;

const app = express();

app.get('/api', (req, res) => {
  console.log(req.url);
  res.send('API');
});

app.listen(PORT, process.env.IP, () => {
  console.log(`Listening on port ${PORT}`);
});
