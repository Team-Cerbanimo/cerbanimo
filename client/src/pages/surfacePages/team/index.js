import React from 'react';
import teamMembers from './teamMembers.json';
import TeamMember from '../../../components/teamMemeber';
import './team.css';
import { Row, Col } from 'react-bootstrap';

export default function Team() {
    let teamMates = teamMembers.map(member => {
        return <Col lg={6}>
            <TeamMember
                id={member.id}
                name={member.name}
                img={member.img}
                skills={member.skills}
                title={member.title}
                paragraph={member.paragraph}
            /> </Col>})
    
        return (
            <Row id="team">
                {teamMates}
            </Row>
        )
    }