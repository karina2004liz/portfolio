import React, { Component } from 'react';
import './header.css';

class Header extends Component{

    render(){
        return(
           <div className= "header">
                <div className= "line" >
               <a href="#home"><h5 className="options" >Home</h5></a>
               </div>
               <div className= "line" >
               <a href="#about"><h5 className="options" >About Me</h5></a>
               </div>
               <div className= "line" >
               <a href="#projects"><h5 className="options" >Projects</h5></a>
               </div>
               <div className= "line" >
               <a href="#skills"><h5 className="options" >Tools</h5></a>
               </div>
               <div className= "line" >
               <a href="#contact"><h5 className="options" >Contact</h5></a>
               </div>

            </div>
    

        )
    }

} 

export default Header