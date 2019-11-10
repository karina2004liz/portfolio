import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Avatar from './components/Avatar';
import Content from './components/Content';


const particlesOpt = {
	"particles": {
		"number": {
			"value": 200,
			"density":{
				"enable": true,
				"value_area":1400
			}
		},
		"size": {
			"value": 1
		},
		"line_linked": {
			"enable": true,
			"opacity": 0.30
		},
  },
  
	"interactivity": {
		"events": {
			"onhover": {
				"enable": true,
				"mode": "repulse"
			},
			"onclick":{
				"enable":false,
				"mode":"push"
			},
			"modes":{
				"grab":{
					"line_linked":{
						"distance": 100
					}
				},
				"repulse": {
					"distance": 180,
					"duration": 0.3
				  },
			}
			
		}
	}	
}


class App extends Component {


  render(){
  return (

    <div className="App" id= "home">
		<div className="principal">
		<header className="App-header">
		<Header/>
		</header>
			
			
			<Particles canvasClassName="background" params={particlesOpt}/>
			<center className = "name"><h2>Karina Cabrera Software Developer</h2></center>
		</div>
		
     
<div id="about" className="cubrir">

<Content/>

</div>
		

    </div>


  );

}
}

export default App;
