const express = require("express");
const app = express();
const carreraRoutes = require("./routes/carreraRoutes");
const cursosRoutes = require("./routes/cursosRoutes");
app.use(express.json());
app.use("/carreras", carreraRoutes);
app.use("/cursos", cursosRoutes);
const PORT = 4000;
app.listen(PORT, () => {
 console.log(`Servidor corriendo en http://localhost:${PORT}`);
});