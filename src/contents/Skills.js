import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['Tankable Designer','FIGMA','HTML','WORD','REACT JS','PPT']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <p> Creative Arts, Video Editing, Home baking and Making personalized key chain.</p>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    