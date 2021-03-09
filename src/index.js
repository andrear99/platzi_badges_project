const nuevo_elemento = document.createElement('h2');
nuevo_elemento.innerText = 'Hola soy un nuevo elemento.'
const elemento = document.getElementById('app');
elemento.appendChild(nuevo_elemento);