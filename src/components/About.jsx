import React, { Component } from 'react';
import './about.css';


class Content extends Component{

    render(){

        return(

            <div className= "allInfo">

            <div className="about" id="about" >
                <div className="txt">
                <h1>About Me</h1>
		<h3>I have always been interested in technology
        and in being able to create important
        changes with it, I am currently studying the
        degree in Computer Systems Engineering.
        I am outgoing, responsible, creative,
        efficient and effective, I like to learn
        from each objective that is presented. 
        I am open to learn any type of programming language. 
        Properly handle stress in any environment.
		</h3>	
                </div>
                <div className="img">
                    <img id="me" src='https://i.ibb.co/0B9V6NX/me.jpg'/>
                </div>
            </div>

            <br></br>



            <div className= "skills">

            </div>

            <div className= "Contact"></div>

            </div>

        )
    }



}

export default Content