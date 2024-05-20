document.addEventListener("DOMContentLoaded", async () => {
    const tareas1 = document.getElementById("tareas");
    const pantalla = document.getElementById("listaTareas");
    const btn_agregar = document.getElementById("btn_add");
    const btn_mostrar = document.getElementById("btn_most");
    const URL = "http://localhost:4000/";
    btn_agregar.addEventListener("click", async (e) => {
        e.preventDefault()
        var lista = {
            tarea: tareas1.value
        };
        const lista2 = JSON.stringify(lista)
        const option = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: lista2
        }
        const res = await fetch(URL, option)
        const respuesta = await res.json()
        if (respuesta.value == 1) {
            icon2 = 'success'
        } else {
            icon2 = 'warning'
        }
        Swal.fire({
            title: respuesta.msg,
            icon: icon2,
            confirmButtonText: 'OK',
            customClass: {
                title: 'swal2-title-custom',
                popup: 'swal2-box-shadow',
                confirmButton: 'swal2-confirm-button-custom'
            }
        });

    });
});







/*       const li = document.createElement("li")
li.textContent = tarea
addProduct.appendChild(li)


const response = await fetch("http://localhost:4000/addtarea",
   {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({ tarea })
   });
const data = await response.json();
console.log("Tarea agregada correctamente:", data);
aviso2.textContent = data.msg
   });
const btn2 = document.getElementById("btn_2");
btn2.addEventListener("click", (e) => {
   e.preventDefault()
   pantalla.style.display = "block";
})
const btn3 = document.getElementById("btn_3");
btn3.addEventListener("click", (e) => {
   e.preventDefault()
   pantalla.style.display = "none";
})*/
