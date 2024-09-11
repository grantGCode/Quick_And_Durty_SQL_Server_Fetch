try {
    require('dotenv').config();
  } catch (error) {
    console.error('Error loading .env file:', error);
  };

const express = require('express');
const mysql = require('mysql2');
const userPassword = process.env.DB_PASSWORD

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: userPassword,
    database: 'acme'

});

db.connect();

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';

    db.query(sql, (err, result) =>{ 
        if(err) throw err;
        res.send(result);
    });
});

app.listen(5000, () => console.log('Server Started'));

