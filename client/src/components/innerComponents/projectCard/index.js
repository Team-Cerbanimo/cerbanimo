import React from 'react';
import { Card } from 'react-bootstrap';

export default function ProjectCard(props) {
    return (
        <Card>
            <Card.Header>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>Community:{props.community}</Card.Subtitle>
            </Card.Header>

            <Card.Body>
                <Card.Img src={props.img}/>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>

            <Card.Footer>
                <Card.Link>Read More...</Card.Link>
            </Card.Footer>
        </Card>
    )
}