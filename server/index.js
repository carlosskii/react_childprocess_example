const express = require('express');
const cors = require('cors');
const { execSync } = require('child_process');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/ls', (req, res) => {
  const result = execSync('ls -la').toString();
  res.send({
    files: result
  })
});

app.get('/array', (req, res) => {
  const result = execSync('python3 server/array.py').toString();
  res.send({
    array: result
  })
})

app.listen(5000);