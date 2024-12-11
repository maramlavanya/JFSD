// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Initialize express app
const app = express();
const port = 5000;

// Use JSON middleware for POST requests
app.use(express.json());
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost', // or the IP of your MySQL server
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'property_db' // Your database name
});

// Check DB connection
db.connect((err) => {
  if (err) {
    console.log('DB connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Simple API endpoint to get all users
app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users'; // Adjust the table name as needed
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching users' });
    }
    res.json(result);
  });
});

// Simple API endpoint to create a new user
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error signing up. Please try again.' });
    }
    res.status(201).json({ message: 'User created successfully' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
