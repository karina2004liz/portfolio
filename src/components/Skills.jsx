import React, { Component } from 'react';
import './skills.css';
import SKILLS from './data/skills'

class Skills extends Component{

    constructor(){
        super();

        this.state ={
            data: SKILLS.skills
        }
    }



    render(){
        return(

            <div id="skills" className="skills">
                <br></br>
                <br></br>
                <center>   
                <h1>Tools</h1>
                </center>

                {this.state.data.map(skills =>{

                    return(
                        <div className="completeCard">
                            <center>
                        <div className= "frontCard">
                        <img className="skillsImg" src={skills.img} ></img>
                        </div>
                        <div className="backCard">
                            <h3 className="textCard">{skills.description}</h3>
                            <h3 className="textCard">{skills.level}</h3>
                            
                        </div>
                        </center>
                        </div>
                        
                    )


                })}


            </div>
        )


    }



}


export default Skills