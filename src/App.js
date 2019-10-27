import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Avatar from './components/Avatar'

class App extends Component {

  render(){
  return (

    <div className="App">

		<div className="principal">
		<header className="App-header">
		<Header/>
		</header>


			<Particles 
		        canvasClassName="background"
                params={{
	    "particles": {
	        "number": {
	            "value": 180
	        },
	        "size": {
	            "value": 2
	        }
      },
      
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
		}	
	}} 
	
	/>



		</div>
     
<div className="cubrir">

	<div className="texto" >
	<h1>Otro div con cosas</h1>
	<p>
	El​ texto argumentativo tiene como objetivo principal dar sustento a la tesis formulada por el autor mediante la exposición coherente y lógica de justificaciones o razones, que tienen como propósito el persuadir o convencer al lector sobre un punto de vista determinado.
	Disculpa. Tenemos dificultades para recuperar tus páginas.

Estamos teniendo problemas para restaurar tu navegación de la sesión anterior. Selecciona Restaurar Sesión para intentar de nuevo.

¿Aún no puedes restaurar tu sesión? A veces una pestaña causa el problema. Revisa las pestañas anteriores, remueve la marca de las que no necesitas recuperar y luego restaura.
	</p>	
	

	</div>

	<div className="image">
	<Avatar/>
	</div>
	
	
	
</div>
	
		

    </div>
  );

}
}

export default App;
