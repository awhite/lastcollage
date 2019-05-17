import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));
app.listen(process.env.PORT);
