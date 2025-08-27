const db = require("../config/db");
db.query(
 `CREATE TABLE IF NOT EXISTS carrera (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(100) NOT NULL
 )`,
 (err) => {
 if (err) console.error("Error creando tabla:", err);
 }
);

exports.getCarreras = (req, res) => {
 db.query("SELECT * FROM carrera", (err, results) => {
 if (err) return res.status(500).json({ error: err });
 res.json(results);
 });
};
exports.getCarreraById = (req, res) => {
 const { id } = req.params;
 db.query("SELECT * FROM carrera WHERE id = ?", [id], (err, result) => {
 if (err) return res.status(500).json({ error: err });
 res.json(result[0]);
 });
};
exports.createCarrera = (req, res) => {
 const { nombre } = req.body;
 db.query("INSERT INTO carrera (nombre) VALUES (?)", [nombre], (err, result) => {
 if (err) return res.status(500).json({ error: err });
 res.json({ id: result.insertId, nombre });
 });
};
exports.updateCarrera = (req, res) => {
 const { id } = req.params;
 const { nombre } = req.body;
 db.query("UPDATE carrera SET nombre = ? WHERE id = ?", [nombre, id], (err) => {
 if (err) return res.status(500).json({ error: err });
 res.json({ id, nombre });
 });
};
exports.deleteCarrera = (req, res) => {
 const { id } = req.params;
 db.query("DELETE FROM carrera WHERE id = ?", [id], (err) => {
 if (err) return res.status(500).json({ error: err });
 res.json({ message: "Carrera eliminada" });
 });
};