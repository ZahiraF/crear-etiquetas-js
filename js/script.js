var etiquetas = document.getElementById("etiquetas");

function añadirEtiqueta(crear) {
    etiquetas = document.getElementById("etiquetas");
    h1 = document.createElement("h1");
    h1.innerHTML = crear;
    etiquetas.appendChild(h1);
}