const express = require('express');
const router = express.Router();

// @route POST api/auth
// @desc Login
// @access Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

// @route GET api/auth
// @desc Login
// @access Private
router.get('/', (req, res) => {
  res.send('Logged in user');
});

module.exports = router;
