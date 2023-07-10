import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import * as dotenv from 'dotenv';




const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), ()=>{
    console.log('Estoy en el puerto '+ app.get("port"));
})


app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev')); 

app.get('/prueba', (req, res)=>{
    res.send('esta es una prueba de la peticion');
})