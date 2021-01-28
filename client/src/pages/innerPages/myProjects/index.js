import React from 'react';
import { Col, Button } from 'react-bootstrap';
import ProjectCard from '../../../components/innerComponents/projectCard';
import ProfileNav from '../../../components/innerComponents/profileNav';

export default function MyProjects(props) {
    //TODO make an API call using props.userID
    //returns all projects that user is working on
    //for now response is defined here
    let res = [
        {
            name: "project one",
            community: "community one",
            description: "description"
        },
        {
            name: "project two",
            community: "community two",
            description: "description two"
        }
    ]
    let yourProjects = res.map(project => {
        return <Col>
            <ProjectCard
                name={project.name}
                community={project.community}
                img={project.img}
                description={project.description}
            />
            {/* TODO add reactions to these buttons */}
            <Button>Drop Project</Button>
            <Button>Team's Slack</Button>
        </Col>
    })
    return (
        <div>
            <Button>Projects I Made</Button>
            <Button>Projects I am Working On</Button>
            <div>
                {yourProjects}
            </div>
        </div>
    )
}