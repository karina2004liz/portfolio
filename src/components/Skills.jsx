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
                        
                        <img className="skillsImg" src={skills.img} ></img>
                        
                    )


                })}


            </div>
        )


    }



}


export default Skills