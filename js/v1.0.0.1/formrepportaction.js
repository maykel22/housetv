function display() {
var optionReport= document.getElementById("optionReport").value;

if (optionReport=="Error_en_el_contenido") {
document.getElementById("Error_en_el_contenido").style.display = "block";
document.getElementById("Solicitar_contenido").style.display = "none";
}

if (optionReport=="Solicitar_contenido") {
document.getElementById("Error_en_el_contenido").style.display = "none";
document.getElementById("Solicitar_contenido").style.display = "flex";
}
}
