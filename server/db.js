const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // default in XAMPP
  password: '',       // leave empty unless you set it
  database: 'cyber_shop'
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

module.exports = db;
