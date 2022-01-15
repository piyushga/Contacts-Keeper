const express = require('express');
const router = express.Router();
const Contact = require('../models/Contacts');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/Users');

// @route GET api/contacts
// @desc Get contacts
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route POST api/contacts
// @desc Add contact
// @access Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route PUT api/contacts
// @desc Update contact
// @access Private
router.put('/:id', (req, res) => {
  res.send('Update a contact');
});

// @route  api/contacts
// @desc Delete contact
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});

module.exports = router;
