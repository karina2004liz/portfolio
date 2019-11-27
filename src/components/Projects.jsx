import React, { Component } from 'react';
import './projects.css';
import PROYECTS from './data/project'
import github from './githubwhite.png';
import webpage from './webpagewhite.png';

class Proyects extends Component{


    constructor(){
        super();

        this.state ={
            data: PROYECTS.project
        }
    }

    render(){
        return(

            <div id="projects" className= "projects">
                
                <center className="titleprojects">   
                <h1>My personal projects</h1>
                </center>
                
            {this.state.data.map(project=>{

                return (
                    <div className= "data">
                            <div className="dataImg" >
                            <img className="imgData" src={project.img}></img>
                            </div>
                          

                        <div className="dataInfo" >
                        <h2 id="title">{project.name}</h2>  
                          <h4>{project.description}</h4> 
 
                              <div className="enlacediv"><a className="enlace" href={project.github} target="_blank" ><img className="imagelink" src={github}/>Github</a></div>
                              <div className="enlacediv"><a className="enlace" href={project.linkpage} target="_blank"><img className="imagelink" src={webpage}/>Webpage</a></div>

                            </div>
                                
                    </div>
                    
                )

            })}
            

        </div>
        )
    }


}


export default Proyects