import React, { Component } from 'react';
import './contact.css';
import github from './github.png';
import gmail from './gmail.png';

class Contact extends Component{

    render(){
        return(

            <div className= "contact" id="contact" >

                <h1>Contact</h1>

                <h3>Karina Lizbeth Cabrera Ruiz</h3>
                <h3>eng.karina.cabrera@gmail.com</h3>
                <h3>3317497765</h3>
                <div className="divLogoGithub" ><a href="https://github.com/karina2004liz" target="_blank" ><img className="logoLink" src={github}/></a></div>
                

            </div>


        )
    }


}

export default Contact