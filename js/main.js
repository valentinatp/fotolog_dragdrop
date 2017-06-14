/*

Ejercicio guiado Flog: La idea es poder escribir nuestro nombre y comentario
para dejarlo en el fotolog.

Para esto seguiremos la siguiente estructura/instrucciones en los pasos:

-Crear el elemento
-Crear el nodo de texto
-Añadir el nodo de texto al elemento
-Agregar atributos al elemento
-Agregar el elemento al documento


*/

function agregaPosteo() {

  // Paso 1. Rescatamos el contenedor-posteos, el nombre y el
  //   comentario del usuario
  var containerPosteos = document.getElementById("contenedor-posteos");
  var nombreFF = document.getElementById("nombre").value;
  var contenidoFF = document.getElementById("cajaposteos").value;

  // Es el elemento que creamos. Es donde irá nuestro post
  var nuevoPost = document.createElement("div");

  // Ahora veamos donde metemos esos valores
  var contenedorNombre = document.createElement("strong");
  var contenedorPost = document.createElement("p");
  var separacíon = document.createElement("hr");
  // crear elementos el corazon
  var parrafCorazon = document.createElement('p');
  var i = document.createElement('i');

  parrafCorazon.appendChild(i);

  // set attributos del corazon
  parrafCorazon.setAttribute("class", "corazon");
  i.setAttribute("class", "fa fa-heart");
  i.setAttribute("arial-hidden", "true");

  // Ahora hay que transformar el nombre a nodo de texto
  var nodoNombre = document.createTextNode(nombreFF + " escribió:");
  var nodoPosteo = document.createTextNode(contenidoFF);

  // Ahora metemos esos nodos de texto a los elementos que ya creamos
  contenedorNombre.appendChild(nodoNombre);
  contenedorPost.appendChild(nodoPosteo);


  // Ahora agregamos el nombre y el contenido del posteo al post
  nuevoPost.appendChild(contenedorNombre);
  nuevoPost.appendChild(contenedorPost);
  nuevoPost.appendChild(parrafCorazon);
  nuevoPost.appendChild(separacíon);

  // evento click en el corazon
  i.addEventListener("click", function(){
    // al elemento i se le pasa la clase rojo
    i.classList.toggle('rojo');
  });

  // Finalmente, le damos atributos a nuestro post y lo metemos en el contenedor de posteos
  nuevoPost.setAttribute("class", "posteo");
  containerPosteos.appendChild(nuevoPost);

  // Resetear los campos a blanco
  document.getElementById("nombre").value = "";
  document.getElementById("cajaposteos").value = "";
}

function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);
}

function permitirDrop(ev){
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(id_foto));
}