import { check } from "express-validator";
import resulltadoValidacion from "./resultadoValidacion";

const validarTarea = [
    check("nombreTarea")
      .notEmpty()
      .withMessage("El nombre de la tarea es obligatorio")
      .isLength({min: 2, max: 100})
      .withMessage('El nombre de la tarea debe contener entre 2 y 100 caracteres inclusive'),
        (req, res, next)=>{resulltadoValidacion(req, res, next)}
    ]


    export default validarTarea