CREATE TABLE users (
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
);
