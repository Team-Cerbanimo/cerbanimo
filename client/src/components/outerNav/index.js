import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import './outerNav.css';





export default function OuterNav() {

  return (
    <Navbar id="outsideNav" collapseOnSelect expand="lg" >
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

          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>

          <LinkContainer to="/register">
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>

          <NavDropdown  title="Platform" id="platformDrop" className="toggleDrop">
            <LinkContainer to="/whatFor">
              <Nav.Link className="drops">What It's For</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/whatDo">
              <Nav.Link className="drops">What It Does?</Nav.Link>
            </LinkContainer>
          </NavDropdown>

          <NavDropdown title="About Us" className="toggleDrop">
            <LinkContainer to="/vision">
              <Nav.Link className="drops">Our Vision</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/team">
              <Nav.Link className="drops">Our Team</Nav.Link>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}