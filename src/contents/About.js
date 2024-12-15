import React, { Component } from 'react';
import picture from '../img/erah ems.jpg';



class About extends Component {
    render() {
        return (
            <div className="condiv">
            <img src={picture} alt="Pic" className="picture"></img>
            <h1 className="subtopic">About Me</h1>
            <h4>Hi welcome my about,</h4>
            <h1>I'm Erah Marisse Jareño Tubel</h1>
            <h1>I'm 22 yrs old now </h1>
            <h3>Student <u>Nemsu-Lc</u> |<br></br> <br></br>Tunkable <u>Designer</u><br></br> <br></br>Badmenton Player</h3>
            <br></br>
            <p>         I started my journey in  computers sciences from an young age,
                now I’m 19 years old, Pursuing my Degree in Nemsu North Estern mindanao State University 
                Playing badminton helps me stay active and improves my coordination, while also offering
                a great way to unwind and have fun. Whether I'm smashing the shuttlecock across the net 
                or engaging in a long, tactical rally, I always feel energized and motivated. It's a sport
                that challenges me physically and mentally, making it both enjoyable and rewarding

            </p>
            
            </div>
            )
        }
    }
    
export default About
    