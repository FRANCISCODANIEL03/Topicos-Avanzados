document.addEventListener("DOMContentLoaded", async()=>{
    const Form = document.getElementById("form1");
    const tareas1 = document.getElementById("tareas");
    const pantalla = document.getElementById("listaTareas");
    const aviso2 = document.getElementById("msj");
    
    
    Form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const tarea = tareas1.value;
        console.log(tarea)
        const addProduct= document.getElementById("tareas2")
    
        const li= document.createElement("li")
        li.textContent= tarea
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
        aviso2.textContent =  data.msg
    });
    const btn2 = document.getElementById("btn_2");
    btn2.addEventListener("click",(e)=>{
        e.preventDefault()
        pantalla.style.display="block";
    })
    const btn3 = document.getElementById("btn_3");
    btn3.addEventListener("click",(e)=>{
        e.preventDefault()
        pantalla.style.display="none";
    })
})