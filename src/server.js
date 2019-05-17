const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));
app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
