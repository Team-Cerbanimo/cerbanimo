import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './outerNav.css';



export default function OuterNav() {
  return (
    <Navbar id="outsideNav" collapseOnSelect expand="lg" >
      <Navbar.Brand id="brand">  <Link to="/home"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
      <img src="https://cerbanimo.quinixdesign.com/v2/wp-content/uploads/2020/11/Cerbanimo-Logo-V001-2.png" alt="Cerbanimo Logo"></img>
      </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="links">
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

          <NavDropdown title="Platform" className="active toggleDrop">
            <Link to="/whatFor"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active drops"
                  : "nav-link drops"
              }
            >What It's For</Link>

            <Link to="/whatDo"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active drops"
                  : "nav-link drops"
              }
            >What It Does?</Link>
          </NavDropdown>

          <NavDropdown title="About Us" className="active toggleDrop">
            <Link to="/vision"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active drops"
                  : "nav-link drops"
              } 
            >Our Vision</Link>

            <Link to="/team"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active drops"
                  : "nav-link drops"
              }
            >Our Team</Link>
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}