/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import {signupController} from "./controllers/signup";

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api-login!' });
});

app.use(signupController)

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
