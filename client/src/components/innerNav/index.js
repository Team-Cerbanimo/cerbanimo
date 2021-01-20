import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import './innerNav.css';




export default function InnerNav() {

  return (
    <Navbar id="innerNav" collapseOnSelect expand="lg" >
      <LinkContainer to="/home">
        <Navbar.Brand id="brand">
          <img src="https://cerbanimo.quinixdesign.com/v2/wp-content/uploads/2020/11/Cerbanimo-Logo-V001-2.png" alt="Cerbanimo Logo"></img>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="links">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/task-market">
            <Nav.Link>Task-Market</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/log-out">
            <Nav.Link>Log Out</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}