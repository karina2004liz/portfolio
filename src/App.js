import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';

class App extends Component {

  render(){
  return (
    <div className="App">
      <header className="App-header">

        <center>
        <h1>My awesome Portfolio</h1>
        </center>

      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 1
	        }
      },
      
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "grab"
	            }
	        }
	    }
	}} />


      </header>
    </div>
  );

}
}

export default App;
