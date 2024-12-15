import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Computer Sciences" where="Nemsu-LC" from="Ausgust 23" to="Present"/>
            <Widecard title="LES| ANS" where="Senior and Secondary School" from="2010" to="2018"/>
            </div>
            )
        }
    }
    
export default Education
    