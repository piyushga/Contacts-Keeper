const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('token');

  if (!token) {
    return res.status(401).json({ msg: 'Unauthorized' });
  }

  try {
    const match = jwt.verify(token, config.get('jwtSecret'));

    req.user = match.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Invalid token' });
  }
};
