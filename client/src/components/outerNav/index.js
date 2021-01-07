import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function OuterNav() {
  return (
    <Navbar id="outsideNav" >
      <Navbar.Brand>Cerbanimo</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/home"
          className={
            window.location.pathname === "/" || window.location.pathname === "/home"
              ? "nav-link active"
              : "nav-link"
          }
        >Home</Link>

        <Link to="/login"
          className={
            window.location.pathname === "/" || window.location.pathname === "/login"
              ? "nav-link active"
              : "nav-link"
          }
        >Login</Link>

        <Link to="/register"
          className={
            window.location.pathname === "/" || window.location.pathname === "/register"
              ? "nav-link active"
              : "nav-link"
          }
        >Register</Link>
        
        <NavDropdown title="Platform" id="basic-nav-dropdown">
          <Link to="/whatFor"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >What's It For?</Link>

          <Link to="/whatDo"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >What's It Do?</Link>
        </NavDropdown>

        <NavDropdown title="About Us" id="basic-nav-dropdown">
          <Link to="/vision"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >Our Vision</Link>

          <Link to="/team"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >Our Team</Link>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}