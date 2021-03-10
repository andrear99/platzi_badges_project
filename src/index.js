/*const nuevo_elemento = document.createElement('h2');
nuevo_elemento.innerText = 'Hola soy un nuevo elemento.'
const elemento = document.getElementById('app');
elemento.appendChild(nuevo_elemento);*/

// VAMOS A HACERLO AHORA USANDO REACT
/*
Para ello vamos a hacer uso de JSX, una biblioteca de JS creada para React exclusivamente.
JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.


*/
import React from 'react';
import ReactDOM, { render } from 'react-dom';
//Importo el componente
import Badge from './components/Badge';

const element = <h1> hola mundo!! </h1>
const container = document.getElementById('app');

// ReactDOM.render( qué_quiero_renderizar, dónde_quiero_renderizarlo)
ReactDOM.render(element, container)

/* React.createElement recibe 3 argumentos:

    El tipo de elemento que estamos creando
    sus atributos o props
    el children (el contenido).
Ejemplo:
React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’); donde "a" es
el tipo del elemento html que queremos crear (un link en este caso) y href seria uno de los
atributos de ese tipo de elemento (los "a" tienen el atributo href)*/

const element_enlace = React.createElement('a', {href: './prueba_componentes.html'}, 'Ir a la pagina de los componentes');
const container_enlace = document.getElementById('enlace');
ReactDOM.render(element_enlace, container_enlace);

/* ¿Cómo insertar variables dentro de un elemento? */

const name = 'Andrea';
//const element_name = React.createElement('h1', {}, `Hola, mi nombre es ${name}`)
// Escribamos lo de arriba con jsx
/*Lo que va dentro de las llaves puede ser cualquier expresion que se va a evaluar en js, no se evaluará como un string. Si ponemos "{2+2}" 
va a mostrar 4. 


También podemos llamar a funciones.*/
const element_name = <h1>Hola, este elemento que muestro ahora es un elemento js: {name}. Ejemplo de suma: {2+2} </h1>
const sitio_name = document.getElementById('sitio_name');

const uno = 1;
const dos = 2;
const funcion = () => uno + dos;
const element_funcion = <h1>Hola, este elemento que muesto es el resultado de una funcion: {funcion()}. </h1>
const sitio_funcion = document.getElementById('funcion');
ReactDOM.render(element_name, sitio_name);
ReactDOM.render(element_funcion, sitio_funcion);

// Vamos a hacer algo un poco más larguito en jsx:
const contenedor_texto = <div>
    <h1> Esto es un div más largo.</h1>
    <p> Podemos poner todo lo que queramos, es un html tal cual.</p>
</div>

const sitio_contenedor = document.getElementById('contenedor');
ReactDOM.render(contenedor_texto, sitio_contenedor);

/*Si quisieramos hacer esto con js normal, tendriamos que hacer una cosa mucho menos legible. Tendriamos algo así:
const contenedor_texto = 
    React.createElement('div', {}, React.createElement('h1', {}, "Esto es un div más largo."))
    React.createElement('div', {}, React.createElement('h1', {}, "")) (...)
Vamos que es mucho mas complicado, por eso NO VAMOS A USAR ESTO. VAMOS A USAR JSX, QUE ES COMO LO HE PUESTO ARRIBA.*/


//USO DE COMPONENTES

const sitio_badge = document.getElementById('sitio_badge');

render(<Badge />, sitio_badge);
