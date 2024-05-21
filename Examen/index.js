const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.listen(4000,()=>console.log("Servidor creado en el puerto 4000"));

let listT = [];
app.get("/",(req,res)=>{
    res.json(listT);
});
app.post("/",(req,res)=>{
    const {tarea} = req.body;
    if(tarea == ""){
        return res.json({
            msg: "Tarea vacia",
            value: 2
        });
    }else{
    listT.push(tarea);
    res.status(200).json({
        msg: "Tarea agregada correctamente",
        value: 1
    });
    }
});