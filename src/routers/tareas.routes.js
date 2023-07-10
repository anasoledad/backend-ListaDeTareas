// app.get('/prueba', (req, res)=>{
//     res.send('esta es una prueba de la peticion');
// })
import { Router } from "express";
import { crearTarea, obtenerTareas, borrarTarea, editarTarea, obtenerTarea } from "../controllers/tareas.controllers";

const router = Router();

router
  .route("/tareas").get(obtenerTareas)
  .post(
//     [
//       check("nombreProducto")
//         .notEmpty()
//         .withMessage("El nombre del producto es obligatorio"),
//     ],
    crearTarea
  );
router
  .route("/tareas/:id")
  .delete(borrarTarea)
  .put(editarTarea)
  .get(obtenerTarea);
export default router;
