import React from 'react';
import Paragraph from '../paragraph';
import './teamMember.css';
import { Card, Col } from 'react-bootstrap';

export default function TeamMember(props) {
    //should map skills -not working as expected
    //plan to work on it later (not a priority)
    // let skills = props.skills.map(skill => {
    //    return <li>{skill.name}</li>
    // })

    return (
        

            <Card style={{ width: '26rem' }} className="teamMember" id={props.id}>
                <Card.Img className="headshots" src={props.img}></Card.Img>

                <Card.Header className="names">{props.name} <br></br> {props.title}</Card.Header>
                <Card.Body>
                    <Paragraph paragraph={props.paragraph} />
                </Card.Body>
                {/* <h4>Works in:</h4>
           <ul className="skillList">
               {skills}
           </ul> */}
            </Card>
       
    )
}