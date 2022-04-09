// Definimos una costante al boton de agregar 
const agregar = document.getElementById('Agregar');
// Defirnir arreglo
let arr = [
    '¿Cuál es la fecha de entrega?', 
    '¿Qué tipo de producto es?', 
    'Breve descripción', 
    'Nombre y numero de cliente', 
    '¿Cuál es el costo total y el anticipo?' 
];
// Definimos un arreglo vacio
let datos=[]
// Agregamos un listener al boton agregar
agregar.addEventListener('click', () => 
{
// limpiamos el arreglo para que no guarde acumule las repuestas
    datos=[]
// Ciclo para pedir datos en prompt
    for (let i = 0; i <= 4; i++) {
        datos.push(prompt(arr[i]))

    }
    // alert(datos);
    
    // Creamos diccionario para almacenar datos
    let diccionario={
        fecha:datos[0],
        tipo:datos[1],
        descripcion:datos[2],
        contacto:datos[3],
        costo:datos[4]
    }
    let keys = Object.keys(localStorage);
    let contador = keys.length;
    // alert(contador)

    let contadorPedidos=contador+1;
    crear(numeroPedido=contadorPedidos,datosPedido=diccionario);
    read();
})
// Definimos variable tabla para llamar de html la sección filas
var table = document.getElementById('filas');
function renderElement() {

    // table.innerHTML = 'Aquó estoy'
// Definimos variable para guardar info de filas
    let codehtml = '<tr>';
    // table.insertRow(0)
// Cada dato lo asignamos en un td
    for (el in datos) {
      codehtml += `<td>${datos[el]}</td>`;
    }
// Concatenamos los datos con los botones borrar y editar
    codehtml += `<td>
    <div class="btn-group me-2" role="group" aria-label="Second group">
        <button type="button" class="btn btn-secondary">Editar</button>
        <button type="button" class="btn btn-secondary">Borrar</button>
      </div>
    </td>`
    codehtml += '</tr>'
// agregarmos a la tabla los datos de code con los botones
    table.innerHTML += codehtml
  }
function crear (numeroPedido,datosPedido){
    // Buscamos el item pedido1 en la variable pedido1 que antes llenamos con el diccionario y lo guardamos en localstorage
    localStorage.setItem(numeroPedido, JSON.stringify(datosPedido))
}
// Creamos función read
function read (){
    // Definimos variable vacia
    var values = []
    // definimos variable keys y revisamos el diccionario en el localstorage
    let keys = Object.keys(localStorage)
    // Contamos las veces que se repite la variable keys en el localstrorage
    let contador = keys.length;
    // En el HTML limpiamos el registro de table que direcciona el tbody(tabla)
    table.innerHTML="";
    // Hacemos un ciclo para poder encontrar el numero de registo ingresado y ademas hacemos un llamado a la funcion renderElement(la que se encarga de imprimir)
    for(i in keys){

        // values.push(localStorage.getItem(keys[i]));
        // la variable datos se transforma en lo que contenga el local Storage, pero el parse convierte de nuevo en diccionario un string
        datos=JSON.parse(localStorage.getItem(keys[i]));
        // Invocamos a la funcion render
        renderElement();
    }
    
    // datos=values;
    // renderElement();
}

