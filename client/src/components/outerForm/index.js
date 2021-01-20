import React from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './outerForm.css';

export default function OuterFrom(props) {
    return (
        <Container>
            <Row>
                <Col ></Col>
                <Col sm={12} lg={6}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  val="" placeholder="Password" />
                        </Form.Group>

                        <Button className="outerButton" type="submit" size="lg">
                            {props.btn}
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}