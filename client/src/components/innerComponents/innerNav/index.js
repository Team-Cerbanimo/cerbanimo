import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import './innerNav.css';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../utils/actions';
import axios from 'axios';


export default function InnerNav() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state)
  const logOut = () => {
    axios.get('/api/auth/logout').then(res => {
      console.log(res)
      dispatch({ type: LOGOUT });
    })
  }
  return (
    <Navbar id="innerNav" collapseOnSelect expand="lg" >
      <LinkContainer to="/dashboard">
        <Navbar.Brand id="brand">
          <img src="https://cerbanimo.quinixdesign.com/v2/wp-content/uploads/2020/11/Cerbanimo-Logo-V001-2.png" alt="Cerbanimo Logo"></img>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="links">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/task-market">
            <Nav.Link>Task-Market</Nav.Link>
          </LinkContainer>

          <NavDropdown title="Profile" className="toggleDrop">
            <LinkContainer to="/profile">
              <Nav.Link className="drops">Public View</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/personal">
              <Nav.Link className="drops">Personal Info</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/my-projects">
              <Nav.Link className="drops">My Projects</Nav.Link>
            </LinkContainer>

          </NavDropdown>

          <LinkContainer to="/create">
            <Nav.Link>Create</Nav.Link>
          </LinkContainer>


          <Nav.Link onClick={logOut}>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}