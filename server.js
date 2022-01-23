const express = require('express');
const Dbconnect = require('./config/db');
const path = require('path');

const app = express();

//DB connect
Dbconnect();

//Init Middleware
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

// Serve static assests in production
if (process.env.NODE_ENV === 'production') {
  // Set a static folder

  app.use(express.static('/client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server Started'));
