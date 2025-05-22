const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // update if needed
});

// Step 1: Create database if not exists
connection.query('CREATE DATABASE IF NOT EXISTS cyber_shop', (err) => {
  if (err) throw err;
  console.log('Database created or already exists.');

  // Step 2: Switch to the new database
  connection.changeUser({ database: 'cyber_shop' }, (err) => {
    if (err) throw err;

    // Step 3: Create users table if not exists
    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(50),
        lastName VARCHAR(50),
        contact VARCHAR(20),
        email VARCHAR(100) UNIQUE,
        address TEXT,
        city VARCHAR(50),
        zipCode VARCHAR(10),
        province VARCHAR(50),
        passwordHash TEXT
      )
    `;

    connection.query(createUsersTable, (err) => {
      if (err) throw err;
      console.log('Users table created or already exists.');
      connection.end();
    });
  });
});
