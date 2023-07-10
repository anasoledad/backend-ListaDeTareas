// app.get('/prueba', (req, res)=>{
//     res.send('esta es una prueba de la peticion');
// })
import { Router } from "express";
import { crearTarea, obtenerTareas, borrarTarea, editarTarea, obtenerTarea } from "../controllers/tareas.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/tareas").get(obtenerTareas)
  .post(
    [
      check("nombreTarea")
        .notEmpty()
        .withMessage("El nombre de la tarea es obligatorio"),
    ],
    crearTarea
  );
router
  .route("/tareas/:id")
  .delete(borrarTarea)
  .put(editarTarea)
  .get(obtenerTarea);
export default router;
