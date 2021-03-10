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
import ReactDOM from 'react-dom';

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

const element_enlace = React.createElement('a', {href: 'https://www.youtube.com/'}, 'Ir a Youtube');
const container_enlace = document.getElementById('enlace');
ReactDOM.render(element_enlace, container_enlace);

/* ¿Cómo insertar variables dentro de un elemento? */

const name = 'Andrea';
const element_name = React.createElement('h1', {}, ´Hola, mi nombre es ${name}´)
const sitio_name = document.getElementById('sitio_name');
ReactDOM.render(element_name, sitio_name);
