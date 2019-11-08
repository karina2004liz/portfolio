import React, { Component } from 'react';
import './header.css';

class Header extends Component{

    render(){
        return(
           <div className= "header">
               <div className= "line" >
               <a href="#about"><h4 className="options" >About Me</h4></a>
               </div>
               <div className= "line" >
               <a href="#proyects"><h4 className="options" >Proyects</h4></a>
               </div>
               <div className= "line" >
               <a href="#contact"><h4 className="options" >Contact</h4></a>
               </div>
            </div>
    

        )
    }

} 

export default Header