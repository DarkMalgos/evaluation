var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

//connection for windows
var connection = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'evaluation'
    });
}

//connection for mac
/*var connection = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'evaluation',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    });
}*/

var app = express();


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//insertion data in table students
app.post('/api/students', function (req, res) {
    var q = "INSERT INTO students (firstname, lastname, age, class, gender) VALUES ('" + req.body.firstname + "', '" + req.body.lastname + "', " + req.body.age + ", '" + req.body.class + "', '" + req.body.gender + "');";
    console.log(q);
    var co = connection();

    co.connect(); //init connection

    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.send(req.body);
    }); //excecution of request

    co.end(); //close connection
});

//recuperate data of table students
app.get('/api/students', function (req, res) {
    var q = 'select * from students',
        co = connection();

    co.connect();
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.send(results);
    });
    co.end();
});

//insertion data in table notes
app.post('/api/notes', function (req, res) {
    var q = "INSERT INTO notes (student, mark) VALUES (" + req.body.student + ", " + req.body.mark + ");";
    console.log(q);
    var co = connection();

    co.connect(); //init connection

    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.send(req.body);
    }); //excecution of request

    co.end(); //close connection
});

//recuperate data of table notes
app.get('/api/notes', function (req, res) {
    var q = 'select * from notes',
        co = connection();

    co.connect();
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.send(results);
    });
    co.end();
});

app.listen(1337);
