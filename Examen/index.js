const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.listen(4000,()=>console.log("Servidor creado en el puerto 4000"));

let listT = [];
app.get("/tareas",(req,res)=>{
    if(listT.length == 0){
        res.json({aviso: "Lista vacia"})
    }
    res.json({listT});
});
app.post("/addtarea",(req,res)=>{
    const {tarea} = req.body;
    console.log(tarea)
    
    if(isNaN(tarea)){
        return res.json({msg: "tarea vacia"});
    }
    const nuevaTarea = { tarea};
        listT.push(nuevaTarea);
        console.log(listT)
    res.status(201).json({msg: "tarea agregada correcta", listT});
})