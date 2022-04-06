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
agregar.addEventListener('click', () => {
// limpiamos el arreglo para que no guarde acumule las repuestas
    datos=[]
// Ciclo para pedir datos en prompt
    for (let i = 0; i <= 4; i++) {
        datos.push(prompt(arr[i]))

    }
    // alert(datos);
// Llamamos a la funcion render (aun sin datos)
renderElement ()
})

function renderElement() {
// Definimos variable tabla para llamar de html la sección filas
    let table = document.getElementById('filas');
    // table.innerHTML = 'Aquó estoy'
// Definimos variable para guardar info de filas
    let codehtml = '<tr>';
    // table.insertRow(0)
// Cada dato lo asignamos en un td
    datos.forEach(function (el) {
      codehtml += `<td>${el}</td>`;
    })
// Concatenamos los datos con los botones borrar y editar
    codehtml += `<td>
    <div class="btn-group me-2" role="group" aria-label="Second group">
        <button type="button" class="btn btn-secondary">Editar</button>
        <button type="button" class="btn btn-secondary">Borrar</button>
      </div>
    </td>`
    codehtml += '</tr>'
// agregarmos a la tabla los datos de code con los botones
    table.innerHTML = codehtml

  }
