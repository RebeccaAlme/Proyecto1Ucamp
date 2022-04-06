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
let datos=[]
// Agregamos un listener al boton agregar
agregar.addEventListener('click', () => {
    datos=[]
    for (let i = 0; i <= 4; i++) {
        datos.push(prompt(arr[i]))

    }
    alert(datos);
renderElement ()
})

function renderElement() {
    let table = document.getElementById('filas');
    // table.innerHTML = 'Aquó estoy'
    let codehtml = '<tr>';
    // table.insertRow(0)
    datos.forEach(function (el) {
      codehtml += `<td>${el}</td>`;
    })
    codehtml += '</tr>'
    table.innerHTML = codehtml

  }
