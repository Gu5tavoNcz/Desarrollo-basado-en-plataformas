var alumno = {
 "nombre" : "Gustavo",
 "edad" : 17,
 "cursos": [
   {
     "codigo" : "A34",
	 "nombre" : "Algoritmos"
   },
   {
     "codigo" : "B34",
	 "nombre" : "Base de Datos"
   }
 ],
 "direccion" : {
   "tipo": "Calle"
 }
};

function verResultado() {
  var out = document.getElementById("output");
  var table = document.createElement("TABLE");
  var trNombre = document.createElement("TR");
  var trEdad = document.createElement("TR");
  var trCursos = document.createElement("TR");

  table.border = "1";

  var td1 = document.createElement("TD");
  var td2 = document.createElement("TD");
  td1.innerText = "Nombre:";
  td2.innerText = alumno.nombre;
  trNombre.appendChild(td1);
  trNombre.appendChild(td2);

  td1 = document.createElement("TD");
  td2 = document.createElement("TD");
  td1.innerText = "Edad:";
  td2.innerText = alumno.edad;
  trEdad.appendChild(td1);
  trEdad.appendChild(td2);

  td1 = document.createElement("TD");
  td2 = document.createElement("TD");
  td1.innerText = "Cursos:";
  var ulCursos = document.createElement("UL");
  for (var i=0; i<alumno.cursos.length; i++) {
	var liCurso = document.createElement("LI");
	liCurso.innerHTML = alumno.cursos[i].nombre;
	ulCursos.appendChild(liCurso);
	liCurso.id = "curso-" + i;
  }
  td2.appendChild(ulCursos);
  trCursos.appendChild(td1);
  trCursos.appendChild(td2);

  table.appendChild(trNombre);
  table.appendChild(trEdad);
  table.appendChild(trCursos);
  out.innerHTML = "";
  out.appendChild(table);
}