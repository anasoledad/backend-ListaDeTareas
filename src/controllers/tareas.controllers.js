import Tarea from "../models/tarea";

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