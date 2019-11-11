import React, { Component } from 'react';
import './projects.css';
import PROYECTS from './data/project'

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
                <br></br>
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
                          <a href={project.github}> Github </a>
                          <br/>
                          <a href={project.linkpage}> Website </a>
                            </div>    



                    </div>
                    
                )

            })}
            

        </div>
        )
    }


}


export default Proyects