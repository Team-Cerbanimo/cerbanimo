import React from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './outerForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN, SIGN_UP } from '../../utils/actions';

export default function OuterFrom(props) {
    const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state)
  const formSubmit = (e)=>{
      e.preventDefault();
     const creds = {
        username: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value.trim()
      }
    if(e.target.innerText==="Submit"){
        dispatch({type: LOGIN, creds}); 
        console.log(state)
    }else{
        dispatch({type: SIGN_UP, creds}); 
        console.log(state)
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

                        <Button onClick={(e)=>{formSubmit(e)}} className="outerButton" type="submit" size="lg">
                            {props.btn}
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}