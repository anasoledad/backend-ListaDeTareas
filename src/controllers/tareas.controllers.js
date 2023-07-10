import Tarea from "../models/tarea";
import { validationResult } from "express-validator";

export const obtenerTareas = async(req, res)=>{
    try{
        const tareas = await Tarea.find();
        res.status(200).json(tareas)
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: 'Error al buscar la tarea'
        })
    }
  }

  export const crearTarea = async(req, res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errores: errors.array()})
        }
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({
            mensaje: 'La tarea fue creada correctamente'
        });
    }catch (error){
        res.status(404).json({
            mensaje: 'Error al crear la tarea'
        })
    }
}
