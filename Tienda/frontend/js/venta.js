document.addEventListener("DOMContentLoaded", () => {
    const Sale = document.getElementById("form2");
    const productos = document.getElementById("opciones");
    const pantalla = document.getElementById("pantalla");
    const pantalla2 = document.getElementById("lista");
    async function getProducts() {
        const urlGetProductos = "http://localhost:3000/producto"
        const productsGET = await fetch(urlGetProductos);
        const products = await productsGET.json();
        return products.productos
    }
    async function insertarDatos() {
        const products = await getProducts();
        let productsName = []
        for (let i = 0; i < products.length; i++) {
            productsName[i] = products[i].Nombre
            const options = document.createElement("option")
            options.textContent = productsName[i]
            options.value = productsName[i] + " $" + products[i].precio
            productos.appendChild(options)
        }
    }
    insertarDatos()
    let listProducts = []
    const add = document.getElementById("agregar")
    add.addEventListener("click", async (e) => {
        e.preventDefault();
        const selectedProduct = productos.value
        const addProduct = document.getElementById("productoslista")

        const li = document.createElement("li")
        li.textContent = selectedProduct
        addProduct.appendChild(li)
        listProducts = [selectedProduct, ...listProducts]
    })
    const most = document.getElementById("mostrar");
    most.addEventListener("click", async (e) => {
        e.preventDefault()
        pantalla2.style.display = "block";
    })

    const comprar = document.getElementById("comprar")
    comprar.addEventListener("click", async (e) => {
        e.preventDefault()
        const mensaje = document.getElementById("msj")

        const lista = JSON.stringify(listProducts)

        const urlPostLista = "http://localhost:3000/compra"
        const option = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: lista
        }

        const res = await fetch(urlPostLista, option)
        const respuesta = await res.text()
        mensaje.textContent = respuesta
        pantalla.style.display = "block";

    })
    const ocultar1 = document.getElementById("btn");
    const ocultar2 = document.getElementById("btn_div");
    ocultar1.addEventListener("click", (e) => {
        e.preventDefault()
        pantalla2.style.display = "none"
    })
    ocultar2.addEventListener("click", (e) => {
        e.preventDefault()
        pantalla.style.display = "none"
    })
})