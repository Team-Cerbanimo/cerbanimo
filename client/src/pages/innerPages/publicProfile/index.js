import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

export default function PublicProfile(props) {
    return (
        <div>
            public profile
            <Container>
                <Row>
                    <Col>
                        <Row><img src="" alt="profile picture"></img></Row>
                        <Row>links</Row>
                    </Col>
                    <Col>
                        <Row><h2>Name</h2></Row>
                        <Row>top skills</Row>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col lg={9}>description</Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col lg={9}>
                        skill component
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col lg={9}>
                        carousel of communities
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}