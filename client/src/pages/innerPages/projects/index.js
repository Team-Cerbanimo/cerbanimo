import React from 'react';
import { Col, Button } from 'react-bootstrap'
import ProjectCard from '../../../components/innerComponents/projectCard'

export default function Projects(props) {
    //TODO make an API call using props.userID
    //returns all projects that user is working on
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
            {yourProjects}
        </div>
    )
}