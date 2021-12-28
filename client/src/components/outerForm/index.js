import React from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './outerForm.css';
import { useDispatch } from 'react-redux';
import { LOGIN} from '../../utils/actions';
import axios from 'axios';

export default function OuterFrom(props) {
    const dispatch = useDispatch();
    const formSubmit = (e) => {
        e.preventDefault();
        const creds = {
            username: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value.trim()
        }
        if (e.target.innerText === "Submit") {
            axios.post('/api/auth/login', creds).then(res => {
                console.log(res)
                if (res.status === 200) {
                    dispatch({ type: LOGIN });
                }
            })
        } else {
            axios.post('/api/user', creds).then(res => {
                console.log(res)
                if (res.status === 200) {
                    dispatch({ type: LOGIN });
                }
            })
        }
    }
    return (
        <Container>
            <Row>
                <Col ></Col>
                <Col sm={12} lg={6}>
                    <Form>
                        <Form.Group >
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" id="email" placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" id="password" placeholder="Password" />
                        </Form.Group>

                        <Button onClick={(e) => { formSubmit(e) }} className="outerButton" type="submit" size="lg">
                            {props.btn}
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}