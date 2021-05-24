const mysql = require('mysql');
const sql=mysql.createConnection({
host:'localhost',
user:'root',
password:'Ppooii123',
port:3306
});

sql.query('use crud');

module.exports = sql;





