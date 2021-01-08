import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './register.css';

export default function Register() {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col>
          <Form>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="outerButton" size="lg">
              Join Cerbanimo
            </Button>
          </Form>
        </Col>
        <Col ></Col>
      </Row>
    </div>
  )
}