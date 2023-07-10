// app.get('/prueba', (req, res)=>{
//     res.send('esta es una prueba de la peticion');
// })
import { Router } from "express";
import { obtenerTareas } from "../controllers/tareas.controllers";

const router = Router();

router
  .route("/tareas").get(obtenerTareas)
//   .get(obtenerProductos)
//   .post(
//     [
//       check("nombreProducto")
//         .notEmpty()
//         .withMessage("El nombre del producto es obligatorio"),
//     ],
//     crearProducto
//   );
// router
//   .route("/productos/:id")
//   .delete(borrarProducto)
//   .put(editarProducto)
//   .get(obtenerProducto);
export default router;
