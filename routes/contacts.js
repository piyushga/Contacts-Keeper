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
router.post(
  '/',
  [auth, [check('name', 'Please add name').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const contact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const response = await contact.save();
      res.json(response);
    } catch (err) {
      console.log(err);
      return res.status(500).send('Server error');
    }
  }
);

// @route PUT api/contacts
// @desc Update contact
// @access Private
router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  const contactFields = {};

  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) res.status(404).send('Not Found');

    // Make sure owners owns it
    if (contact.user.toString() !== req.user.id)
      return res.status(401).send('Unauthorized');

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Server error');
  }
});

// @route  api/contacts
// @desc Delete contact
// @access Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) res.status(404).send('Not Found');

    // Make sure owners owns it
    if (contact.user.toString() !== req.user.id)
      return res.status(401).send('Unauthorized');

    await Contact.findByIdAndRemove(req.params.id);

    res.send('Contact Removed');
  } catch (err) {
    console.log(err);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
