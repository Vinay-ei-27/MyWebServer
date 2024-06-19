import express from 'express';
import winston from 'winston';

const app = express();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json({ limit: '20mb', extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ status: 200, message: 'successful', data: { name: 'This is home page' } });
});

app.get(`/user/:name`, (req, res) => {
  const userName = req.params.name;
  res.status(200).json({ status: 200, message: 'successful', data: `Hello ${userName} how are you?` });
});

app.all('*', (req, res) => {
  res.status(400).json({
    status: 400,
    message: 'Bad Request',
    errorCode: 'code/bad-request',
  });
});

const PORT = 4040 || process.env.PORT;
app.listen(PORT, () => console.log(`⚡️Server is up and running locally on ${PORT}`));
