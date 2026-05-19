const express = require('express');
const connectDB = require('./db'); // This imports your db.js file

const app = express();

// Connect to your MongoDB Database
connectDB();

// A simple route to check if the server is working
app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});