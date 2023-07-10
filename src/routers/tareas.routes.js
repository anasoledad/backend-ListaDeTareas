// app.get('/prueba', (req, res)=>{
//     res.send('esta es una prueba de la peticion');
// })
import { Router } from "express";
import { crearTarea, obtenerTareas, borrarTarea, editarTarea, obtenerTarea } from "../controllers/tareas.controllers";
import validarTarea from "../helpers/validarTareas";

const router = Router();

router
  .route("/tareas").get(obtenerTareas)
  .post( validarTarea, crearTarea
  );
router
  .route("/tareas/:id")
  .delete(borrarTarea)
  .put(validarTarea, editarTarea)
  .get(obtenerTarea);
export default router;
