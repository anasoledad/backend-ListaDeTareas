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

export const borrarTarea = async (req, res)=>{
    try{
        console.log(req.params.id);
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'La tarea fue eliminada'
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'La tarea no pudo ser eliminada'
        })
    }
}

export const editarTarea = async(req, res)=>{
    try {
        await Tarea.findByIdAndUpdate(req.params.id, req.body); 
        res.status(200).json({
            mensaje: 'La tarea fue actualizada correctamente'
        })
    } catch(error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'La tarea no pudo ser editada',
        })
    }
}

export const obtenerTarea = async(req, res)=>{
    try{
        const tarea = await Tarea.findById(req.params.id);
        res.status(200).json(tarea)
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: 'No se pudo obtener la tarea buscada'
        })
    }
};