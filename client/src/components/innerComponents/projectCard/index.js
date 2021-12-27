import React from 'react';
import { Card } from 'react-bootstrap';


export default function ProjectCard(props) {
    return (
        <Card style={{ width: '24rem' }}>
            <Card.Header className="card-head">
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>Community:{props.community}</Card.Subtitle>
            </Card.Header>

            <Card.Body>
                <Card.Img src={props.img}/>
                <Card.Text>{props.description}</Card.Text>
                {/* TODO add max characters for visible */}
            </Card.Body>

            <Card.Footer>
                <Card.Link>Read More...</Card.Link>
                {/* TODO make this a toggle for all text visible */}
            </Card.Footer>
        </Card>
    )
}