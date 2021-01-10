import React from 'react';
import { Form, InputGroup, Button, Col, Row } from 'react-bootstrap';
import './home.css'

export default function Home() {
    return (
        <div id="homepage">
        <Row >
            <Col lg={1}></Col>
            <Col>
                <h2>Say Hello to the future of</h2>
                <br></br>
                <p>
                    The days of the traditional job are numbered – let’s make sure what comes next works for us.
                    Cerbanimo seeks to create a connected ecosystem of services that work together to clear
                    your path of frustration and concern so you can build your own path with confidence and grace.
                </p>
                <br></br>
                <Form>
                    <InputGroup className="mb-2 mr-sm-2">
                    <Form.Control size="lg" placeholder="Enter your email address" />
                        <InputGroup.Append>
                                <Button className="outerButton" type="submit" size="lg">
                                    Join Our Waitlist
                                </Button>
                        </InputGroup.Append> 
                    </InputGroup>
                </Form>

            </Col>
            <Col>
                <img src="" alt="drawn women with laptop and coffee"></img>
            </Col>
            <Col lg={1}></Col>
        </Row>
        <Row id="purpleHome"></Row>
        </div>
    )
}