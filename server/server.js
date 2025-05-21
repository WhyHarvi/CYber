const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');
const auth = require('./auth');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

const users = []; // pretend DB

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'secretkey', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}


// Register Route
app.post('/register', async (req, res) => {
  const {
    firstName, lastName, contact, email,
    address, city, zipCode, province, password
  } = req.body;

  // Check if user exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) return res.status(400).json({ msg: 'User already exists' });
    console.log(password);
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert user
    const sql = `INSERT INTO users 
      (firstName, lastName, contact, email, address, city, zipCode, province, passwordHash) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [firstName, lastName, contact, email, address, city, zipCode, province, passwordHash], (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ msg: 'User registered successfully' });
    });
  });
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ msg: 'Database error', error: err });

    if (results.length === 0) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const user = results[0];

    const match = await bcrypt.compare(password, user.passwordHash); // compare with hashed password
    if (!match) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const token = jwt.sign({ email: user.email }, 'secretkey');
    res.json({ token, name: user.firstName });
  });
});

// fetch user profile
app.get('/my-profile', auth, (req, res) => {
  const email = req.user.email;

  const sql = 'SELECT firstName, lastName, contact, address, city, zipCode, province FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ msg: 'Database error', error: err });

    if (results.length === 0) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(results[0]); // send user data
  });
});

// Update user profile
app.put('/update-profile', auth, (req, res) => {
  const email = req.user.email;
  const { firstName, lastName, contact, address, city, zipCode, province } = req.body;

  const sql = `
    UPDATE users SET 
      firstName = ?, 
      lastName = ?, 
      contact = ?, 
      address = ?, 
      city = ?, 
      zipCode = ?, 
      province = ?
    WHERE email = ?`;

  db.query(sql, [firstName, lastName, contact, address, city, zipCode, province, email], (err, result) => {
    if (err) return res.status(500).json({ msg: 'Database error', error: err });

    res.json({ msg: 'Profile updated successfully' });
  });
});

app.get('/user-profile', authenticateToken, (req, res) => {
  const email = req.user.email;

  const sql = 'SELECT firstName, lastName, contact, email, address, city, zipCode, province FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ msg: 'Database error', error: err });

    if (results.length === 0) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const user = results[0];
    res.json({
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      phone: user.contact,
      address: `${user.address}, ${user.city}, ${user.province}, ${user.zipCode}`,
    });
  });
});


app.listen(5000, () => console.log('Server running on http://localhost:5000'));
