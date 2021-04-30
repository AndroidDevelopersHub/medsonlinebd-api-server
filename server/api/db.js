const mysql = require("mysql");

// Dev
const connection = mysql.createConnection({
    host: "localhost",
    user: "medssvai_api",
    password: "api258852",
    database: "medssvai_api"
});

//Local
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123456", // "" , "root"
//     database: "medssvai_api",
//     port: 8889
// });



connection.connect((err) => {
    if (err) throw err;
    console.log(err)
    console.log("Connected!");
});

module.exports = connection;