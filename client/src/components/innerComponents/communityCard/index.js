import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import ProjectCard from '../projectCard';
import './card.css';
export default function CommunityCard(props) {
    console.log(props)
    //TODO make API call using props.name to GET projects from that community
    //Then using return
    let communityProjects
    if (props.page === "public") {
        communityProjects = ""
    }
    else if (props.page === "Market") {
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
        communityProjects = res.map(project => {
            return <Carousel.Item>
                <ProjectCard
                    name={project.name}
                    community={project.community}
                    img={project.img}
                    description={project.description}
                />
            </Carousel.Item>
        })
    }

    return (
        <Card>
            <Card.Header className="card-head">
                {/* <Card.Img src={props.img} /> */}
                <Card.Title className="card-title">{props.name}</Card.Title>
                <Card.Text>{props.interest}</Card.Text>
            </Card.Header>

            <Card.Body>
                {/* <Carousel id="communityProjects">
                    {communityProjects}
                </Carousel> */}
                {/* TODO add max characters for visible */}
                <Card.Text>{props.description}</Card.Text>
                {/* TODO make this a toggle for all text visible */}
                <Card.Link>Read More...</Card.Link>
            </Card.Body>
        </Card>
    )
}