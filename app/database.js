const mysql = require('mysql');
const randomName = require('node-random-name')

const conn = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'root',
    database: 'app_database'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
    conn.query("CREATE TABLE IF NOT EXISTS people (name VARCHAR(255))")
    conn.query("INSERT INTO people(name) values('" + randomName({ first: true }) + "')")
});

module.exports = conn;