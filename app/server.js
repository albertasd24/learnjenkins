import express from 'express';

const server = express();
const PORT = 3000;

// Prevent disclosing framework details in response headers.
server.disable('x-powered-by');

server.get('/', (req, res) => {
  res.send('Hello, Jenkins!');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});