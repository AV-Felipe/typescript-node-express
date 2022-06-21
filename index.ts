import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/ping', (req, res) => {
  const value = {ping: "pong"};
  res.type('application/json')
  res.send(value);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});