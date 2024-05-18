const Vet = document.querySelector("#FormVet");

function Registrar(e){
    e.preventDefault();
    var NombreD = document.getElementById("NomD").value;
    var NombreM = document.getElementById("NomM").value;
    var Contacto = document.getElementById("Cont").value;
    var Padecimiento = document.getElementById("Pad").value;
    var ImagenI = document.getElementById("imagenInput").files[0];
     
    var formData = new FormData();
    formData.append("nombreD",NombreD);
    formData.append("nombreM",NombreM);
    formData.append("contc",Contacto);
    formData.append("padec",Padecimiento);
    formData.append("foto",ImagenI);

    var datosMostrados = document.getElementById("datosMostrados");
    datosMostrados.innerHTML = "<h4>Nombre del Dueño:  " + NombreD + "</h4>"+ 
        "<h4>Nombre de la mascota:  " + NombreM + "</h4>" + 
        "<h4>Contacto:  " + Contacto + "</h4>" + 
        "<h4>Padecimiento:  " + Padecimiento + "</h4>";
        
    var imagenMostrada = document.getElementById("imagenMostrada2");
    imagenMostrada.src = URL.createObjectURL(ImagenI);
    imagenMostrada.style.display = "block";
}
document.getElementById("imagenInput").addEventListener("change", function(){
    var reader = new FileReader();
    reader.onload = function(e){
        var imagenMostrada2 = document.getElementById("imagenMostrada");
        imagenMostrada2.src = e.target.result;
        imagenMostrada2.style.display = "block";
    }
    reader.readAsDataURL(this.files[0]);
});
Vet.addEventListener("submit",Registrar);