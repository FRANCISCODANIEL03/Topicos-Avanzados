let nonmbre = document.getElementById("nombre");
nonmbre.innerHTML = localStorage.getItem("nombre"); 
let imagen = document.getElementById("img2");
imagen.src = localStorage.getItem("imagen");
const cal =()=>{
    window.location.href="/Login_Form/html/calculadora.html";
}
const cance3 =()=>{
    window.location.href="/Login_Form/html/index.html";
}