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
	            "value": 170
	        },
	        "size": {
	            "value": 1
	        }
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
					}
				}
				
	        }
		}	
	}} 
	
	/>




		</div>
     
<div id="about" className="cubrir">


	

	<div className="texto" >
	<h1>About Me</h1>
	<h3>
		
I have always been interested in technology and in being able to create important changes with it, I am currently studying the degree in Computer Systems Engineering. I am outgoing, responsible, creative, efficient and effective, I like to learn from each objective that is presented. I am open to learn any type of programming language. Properly handle stress in any environment.
		</h3>	
	

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
