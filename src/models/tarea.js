import {Schema, model} from 'mongoose';

const tareaSchema = new Schema({
    nombreTarea: {
        type: String,
        minLength: 2,
        maxLength: 100,
        uniqued: true,
        required: true
    }, 

})

const Tarea = model('tarea', tareaSchema);

export default Tarea;
