import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './login.css';

export default function Login() {
    return (
        <div>
            <Row>
                <Col></Col>
                <Col>
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
                <Col ></Col>
            </Row>
        </div>
    )
}