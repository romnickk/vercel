const express = require('express');
const app = express();

app.get('/helloo', (req, res) => {
  res.send('Hello, Vercel!');
});

app.get('/hi', (req, res) => {
    res.send('Hello, Vercel!');
  });

// Define more endpoints or middleware as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
