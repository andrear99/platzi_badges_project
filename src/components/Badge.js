import React from 'react';


//Aquí vamos a crear nuestros componentes
/* Un componente es una especie de pieza de lego. Es como una clase. De cada componente podremos crear instancias concretas que serían objetos. 
Los elementos se identifican porque están entre "< />". Cuidado: cuando en la hoja principal queramos usar un componente para ponerlo en la pagina,
lo que le pasemos al ReactDOM.render(..., _), lo que va en ... debe ser un ELEMENTO. Por eso le pasaremos el nombre del componente pero entre < />.
Es decir, si el componente se llama Badge, le enviaremos (<Badge/>, sitio). */

//Importo la imagen desde el pc, aunque tambien podreia meter la url de internet directamente
import confLogo from '../images/logo-aunna-horiz2_25.png'

//Importo el estilo css
import '../styles/Badge.css';

// Importo bootstrap. OJO, para usarlo debemos hacer antes en el cmd: "npm install bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

class Badge extends React.Component {

    render() { //"Cuando hagamos render de este componente, lo que se va a retornar es lo que pongamos dentro del return"
        return( 
            // Para poder usar los estilos del css es necesario que usemos clases ("class"). En React se ponen como "className".
            <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl} //this.props se refiere a las props que se le han enviado al Badge en index.js cuando hemos hecho el render(...)
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
            
        )
    }
}

export default Badge;