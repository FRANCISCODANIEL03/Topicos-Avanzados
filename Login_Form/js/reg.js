const Registro = document.querySelector("#formr");
let Nombre = document.querySelector("#nom").value;
let Apellidos = document.querySelector("#apell").value;
let Correo = document.querySelector("#correo").value;
let Usuario = document.querySelector("#user").value;
let  Password_1 = document.querySelector("#cont1");
let Password_2 = document.querySelector("#cont2");

const confirm =()=>{
    if(Password_1.value != Password_2.value){
        alert("Las contraseñas no coinciden ");
    }else{
        alert("Cuenta creada");
    }
}
const cance4 =()=>{
    window.location.href="/html/index.html";
}