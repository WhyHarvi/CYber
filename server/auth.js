const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, 'secretkey');
    req.user = decoded; // e.g. { email: ... }
    next();
  } catch (err) {
    return res.status(403).json({ msg: 'Invalid token' });
  }
}

module.exports = auth;
