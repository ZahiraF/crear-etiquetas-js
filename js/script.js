var etiquetas = document.getElementById("etiquetas");

function añadirEtiqueta(crear) {
    etiquetas = document.getElementById("etiquetas");
    h1 = document.createElement("h1");
    h1.innerHTML = crear;
    etiquetas.appendChild(h1);
}

//getElementById  -> seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.
//createElement  -> crea un elemento HTML especificado por su tagName , o un HTMLUnknownElement (en-US) si su tagName no se reconoce.
//appendChild  -> Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.