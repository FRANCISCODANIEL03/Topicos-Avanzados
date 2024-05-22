const express = require("express");//para montar el servidor
const cors = require("cors");//para conectar los clientes al servidor

const app = express();

app.use(cors());//para recibir datos de ips distintas a localhost 

app.use(express.json());//permite leer los datos JSON   
app.listen(3000, () => console.log("Servidor creado en el puerto 3000"));

app.get("/producto", (req, res) => {
    const lista = {
        productos: [
            {
                Nombre: "Aceite",
                precio: 50,
                marca: "Nutrioli"
            },
            {
                Nombre: "Jabon de polvo",
                precio: 35,
                marca: "Roma"
            },
            {
                Nombre: "Galletas",
                precio: 25,
                marca: "Gamesa"
            },
            {
                Nombre: "Papas fritas",
                precio: 20,
                marca: "Sabritas"
            },
            {
                Nombre: "Azucar",
                precio: 35,
                marca: "Morena"
            },
            {
                Nombre: "Sal",
                precio: 30,
                marca: "La Fina"
            }
        ]
    }
    res.json(lista);
})
const product = []
let productsName = []
let productsPrice = []
app.post("/compra", (req, res) => {
    const data = req.body;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        product[i] = data[i].split(' $');
        productsName = [product[i][0], ...productsName]
        productsPrice = [product[i][1], ...productsPrice]
        total += parseFloat(productsPrice);
    }

    res.send(`El total de tu compra es: $ ${total}`)
})
