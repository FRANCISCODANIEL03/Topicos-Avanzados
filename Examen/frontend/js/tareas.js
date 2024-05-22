document.addEventListener("DOMContentLoaded", async () => {
    const tareas1 = document.getElementById("tareas");
    const tareas2 = document.getElementById("tareas2");
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
    btn_mostrar.addEventListener("click", (e) => {
        e.preventDefault()
        pantalla.style.display = "block";
        mostrar();
    });
    const limpiarTabla = () => {
        while (tareas2.firstChild) {
            tareas2.removeChild(tareas2.firstChild);
        }
    }
    const mostrar = async () => {
        const datos = await fetch(URL);
        const datos2 = await datos.json();
        limpiarTabla();
        for (let i = 0; i < datos2.length; i++) {
            var li = document.createElement("li");
            li.textContent = datos2[i];
            tareas2.appendChild(li);
        }
    }
    const btn3 = document.getElementById("btn_3");
    btn3.addEventListener("click", (e) => {
        e.preventDefault();
        pantalla.style.display = "none";
    })
});
