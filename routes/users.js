const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/Users');

// @route POST api/users
// @desc Register
// @access Public
router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please add an valid email').isEmail(),
    check('password', 'Please add password with more than 6 chars').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array });
    }

    res.send('Passed');
  }
);

module.exports = router;
