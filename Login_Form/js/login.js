const formulario = document.getElementById("formu");
const usuario = document.getElementById("correo");
const acceso = document.getElementById("contraseña");
const msj = document.getElementById("mensaje");

const usuarios = [{
    user : "Pablo",
    email : "user1@gmail.com",
    contra : "123",
    picture : "/Login_Form/imgs/pablo.jpg"
}, 
{
    user : "Martin",
    email : "Martin32@gmail.com",
    contra : "321",
    picture : "/Login_Form/imgs/Martin.jpg"
}]

const eventoFormu = (evt)=>{
    evt.preventDefault();
    let email = usuario.value;
    let contra = acceso.value;
    let coincidencia = usuarios.filter((usuario)=> usuario.email === email);
    if(coincidencia.length > 0){
        if(coincidencia[0].contra === contra){
            alert("Bienvenido "+ coincidencia[0].user);
            localStorage.setItem("nombre",coincidencia[0].user);
            localStorage.setItem("imagen",coincidencia[0].picture);
            window.location.href="/Login_Form/html/home.html";
        }else {msj.textContent = "Contraseña incorrecta"}
    }else{
        msj.textContent = "Correo incorrecto";
    }
}
formulario.addEventListener("submit",eventoFormu);