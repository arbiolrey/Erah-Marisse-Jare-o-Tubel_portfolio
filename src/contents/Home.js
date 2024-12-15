import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/era ems.jpg';
import Social from '../components/Social'


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Erah Marisse Jareño Tubel','Computer sciences']} speed={100} eraseDelay={500}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    