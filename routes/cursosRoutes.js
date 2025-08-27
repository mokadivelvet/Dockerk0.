const express = require("express");
const router = express.Router();
const cursosController = require("../controllers/cursosController");
router.get("/", cursosController.getCursos);
router.get("/:id", cursosController.getCursosById);
router.post("/", cursosController.createCursos);
router.put("/:id", cursosController.updateCursos);
router.delete("/:id", cursosController.deleteCursos);
module.exports = router;