import React from 'react';


//Aquí vamos a crear nuestros componentes
/* Un componente es una especie de pieza de lego. Es como una clase. De cada componente podremos crear instancias concretas que serían objetos. 
Los elementos se identifican porque están entre "< />". Cuidado: cuando en la hoja principal queramos usar un componente para ponerlo en la pagina,
lo que le pasemos al ReactDOM.render(..., _), lo que va en ... debe ser un ELEMENTO. Por eso le pasaremos el nombre del componente pero entre < />.
Es decir, si el componente se llama Badge, le enviaremos (<Badge/>, sitio). */

//Importo la imagen desde el pc, aunque tambien podreia meter la url de internet directamente
import logo from '../images/logo-aunna-horiz2_25.png'

//Importo el estilo css
import "../styles/Badge.css"

class Badge extends React.Component {

    render() { //"Cuando hagamos render de este componente, lo que se va a retornar es lo que pongamos dentro del return"
        return( 
            // Para poder usar los estilos del css es necesario que usemos clases ("class"). En React se ponen como "className".
            <div className="badge">
                <div className="badge_header">
                    <img className=" " src= {logo} ></img>
                </div>
                <div className="badge_section-name">
                    <img className="badge_avatar" src= "https://insurance.wolfman.es/wp-content/uploads/2020/02/perfil-avatar-hombre-icono-redondo_rubio.jpg" ></img>
                    <h3> Richard Castle </h3>
                </div>
            </div>
        )
    }
}

export default Badge;