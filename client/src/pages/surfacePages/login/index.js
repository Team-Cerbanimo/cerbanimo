import React from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './login.css';

export default function Login() {
    return (
        <Container>
            <Row>
                <Col ></Col>
                <Col sm={12} lg={6}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username or Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Username or Email Address" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  val="" placeholder="Password" />
                        </Form.Group>

                        <Button className="outerButton" type="submit" size="lg">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col  ></Col>
            </Row>
        </Container>
    )
}