const calculadora = document.querySelector("#formc");
let P_Numero = document.querySelector("#primn");
let S_Numero = document.querySelector("#segn");
let Resultado = document.getElementById("resul");
let Sig = document.getElementById("signos");
let Vac = document.getElementById("vacio");

const limp =()=>{
    Sig.textContent = "";
    Resultado.textContent = "";
}
const suma=()=>{
    if(P_Numero.value.length == 0 || S_Numero.value.length == 0){
        Vac.textContent = "Alguna celda se encuentra vacia";
    }else{
    let num1 = parseFloat(P_Numero.value);
    let num2 = parseFloat(S_Numero.value);
    let num3 = (num1 + num2).toFixed(3);
    Resultado.textContent = num3;
    Sig.textContent = "+";
    Vac.textContent = "";
    }
}
const resta=()=>{
    if(P_Numero.value.length == 0 || S_Numero.value.length == 0){
        Vac.textContent = "Alguna celda se encuentra vacia";
    }else{
    let num1 = parseFloat(P_Numero.value);
    let num2 = parseFloat(S_Numero.value);
    let num3 = (num1 - num2).toFixed(3);
    Resultado.textContent = num3;
    Sig.textContent = "-";
    Vac.textContent = "";
    }
}
const multi=()=>{
    
    if(P_Numero.value.length == 0 || S_Numero.value.length == 0){
        Vac.textContent = "Alguna celda se encuentra vacia";
    }else{
    let num1 = parseFloat(P_Numero.value);
    let num2 = parseFloat(S_Numero.value);
    let num3 = (num1 * num2).toFixed(3);
    Resultado.textContent = num3;
    Sig.textContent = "*";
    Vac.textContent = "";
    }
}
const divi=()=>{
    if(P_Numero.value.length == 0 || S_Numero.value.length == 0){
        Vac.textContent = "Alguna celda se encuentra vacia";
    }else{
    let num1 = parseFloat(P_Numero.value);
    let num2 = parseFloat(S_Numero.value);
    let num3 = (num1 / num2).toFixed(3);
    Resultado.textContent = num3;
    Sig.textContent = "/";
    Vac.textContent = "";
    }
}
const cance2=()=>{
    window.location.href="/Login_Form/html/home.html";
}
