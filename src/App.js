import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Avatar from './components/Avatar'

class App extends Component {

  render(){
  return (

    <div className="App">
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
  );

}
}

export default App;
