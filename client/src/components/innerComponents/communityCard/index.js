import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import ProjectCard from '../projectCard';

export default function CommunityCard(props) {
    //TODO make API call using props.name to GET projects from that community
    //Then using return
    let communityProjects = res.map(project => {
        return <Carousel.Item>
            <ProjectCard
                name={project.name}
                community={project.community}
                img={project.img}
                description={project.description}
            />
        </Carousel.Item>
    })
    return (
        <Card>
            <Card.Header>
                <Card.Img src={props.img} />
                <Card.Title>{props.name}</Card.Title>
            </Card.Header>

            <Card.Body>
                <Carousel>
                    {communityProjects}
                </Carousel>
            </Card.Body>

            <Card.Footer>
                <Card.Text>{props.description}</Card.Text>
                   {/* TODO add max characters for visible */}
                <Card.Link>Read More...</Card.Link>
                  {/* TODO make this a toggle for all text visible */}
            </Card.Footer>
        </Card>
    )
}