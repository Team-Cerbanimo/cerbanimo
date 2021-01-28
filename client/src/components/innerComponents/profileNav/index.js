import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


export default function ProfileNav() {

  return (
    <Navbar id="profileNav" collapseOnSelect expand="lg" >
       <LinkContainer to="/profile">
        <Navbar.Brand id="brand">
           My Profile
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="links">
          <LinkContainer to="/personal">
            <Nav.Link>Personal Info</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/my-projects">
            <Nav.Link>My Projects</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/create">
            <Nav.Link>Create</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}