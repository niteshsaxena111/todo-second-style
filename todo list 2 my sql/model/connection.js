const  mysql = require('mysql');


const db = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"todo list"
})

db.connect((err) =>{
    if(err) throw err;
    console.log("Db connected")
})

module.exports = db