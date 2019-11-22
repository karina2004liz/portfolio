import React, { Component } from 'react';
import './about.css';





class Content extends Component{

    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }

    render(){

        return(

            <div className= "allInfo">

            <div className="about" id="about" >
                <div className="txt">
                <h1 id="titleAbout">About Me</h1>
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
                    <img id="me" src='https://i.ibb.co/9sXjG47/me.jpg'/>
                </div>
            </div>

            </div>

        )
    }



}

export default Content