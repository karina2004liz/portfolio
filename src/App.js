import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Avatar from './components/Avatar';
import Content from './components/Content';

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

<Content/>

</div>
		

    </div>


  );

}
}

export default App;
