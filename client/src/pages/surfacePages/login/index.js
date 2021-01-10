import React from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './login.css';

export default function Login() {
    return (
        <Container>
            <Row>
                <Col ></Col>
                <Col sm={12}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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