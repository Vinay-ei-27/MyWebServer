import express from 'express';

const app = express();

app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json({ limit: '20mb', extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ status: 200, message: 'successful', data: { name: 'Vinay Maurya' } });
});

app.get('/home', (req, res) => {
  res.status(200).json({ status: 200, message: 'successful', data: 'This is home page' });
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
