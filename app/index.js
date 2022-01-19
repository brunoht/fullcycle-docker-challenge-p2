const express = require('express')
const app = express()
const port = 3000

const db = require('./database');

// View engine setup
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sql = 'SELECT * FROM people';
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.render('home', { title: 'Full Cycle Rocks!', people: data});
    });
})

app.listen(port, ()=>{
    console.log('Rodando na porta ' + port)
})