const Conv = document.querySelector("#formC");

let mil = document.getElementById("mm");
let met = document.getElementById("mt");
let kil = document.getElementById("km");
let pul = document.getElementById("in");
let pie = document.getElementById("ft");
let yar = document.getElementById("yd");

const calcular = (e) => {
    e.preventDefault();
    let valor = document.getElementById("val").value;
    let milimetro, kilometro, pulgada, pies, yarda, metro;

    metro = parseFloat(valor / 100);
    milimetro = parseFloat(metro * 1000);
    kilometro = parseFloat(metro * .001).toFixed(4);
    pulgada = parseFloat(metro * 39.3701).toFixed(4);
    pies = parseFloat(metro * 3.28084).toFixed(4);
    yarda = parseFloat(metro * 1.09361).toFixed(4);

    mil.textContent = "el valor en milimetros es " + milimetro;
    met.textContent = "el valor en metros es " + metro;
    kil.textContent = "el valor en kilometros es " + kilometro;
    pul.textContent = "el valor en pulgadas es " + pulgada;
    pie.textContent = "el valor en pies es " + pies;
    yar.textContent = "el valor en yardas es " + yarda;
}
const limpiar = (e) => {
    e.preventDefault();
    let valor = document.getElementById("val");
    valor.value = "";
    mil.textContent = "";
    met.textContent = "";
    kil.textContent = "";
    pul.textContent = "";
    pie.textContent = "";
    yar.textContent = "";
}
Conv.addEventListener("submit", calcular);
Conv.addEventListener("reset", limpiar);