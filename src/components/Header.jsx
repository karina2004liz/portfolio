import React, { Component } from 'react';
import './header.css';

class Header extends Component{

    render(){
        return(
           <div className= "header">
               <div className = "line" ><h1 className= "options" >About Me</h1></div>
               <div className = "line"><h1 className= "options">Proyects</h1></div>
               <div className = "line"><h1 className= "options">Contact</h1></div>
            </div>
    

        )
    }

} 

export default Header