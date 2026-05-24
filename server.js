require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.static('public')); 


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/api', (req, res) => {
  res.send('My Week 2 API!');
});

app.post('/user', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Missing required fields: name and email are required' 
    });
  }
  
  res.json({ message: `Hello, ${name}!`, email: email });
});

app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ${id} profile` });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});