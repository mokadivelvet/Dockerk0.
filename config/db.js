const mysql = require("mysql2");
const connection = mysql.createConnection({
 host: "localhost",
 port: 3309,
 user: "utnuser",
 password: "utnpass",
 database: "UTNCRUD"
});
connection.connect((err) => {
 if (err) {
 console.error("Error conectando a la BD:", err);
 return;
 }
 console.log("Conectado a MySQL en Docker (UTNCRUD)");
});
module.exports = connection;

