import React from 'react';
import { Navbar, Row, Col, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './outerFooter.css';

export default function OuterFooter() {
    return (
        <Navbar sticky="bottom" id="outsideFooter">
            <Row id="tableFooter">
                <Col lg={3} sm={12}><img id="footerLogo" src="https://cerbanimo.quinixdesign.com/v2/wp-content/uploads/2020/11/Cerbanimo-Logo-V001-5.png" alt="Cerbanimo logo"></img> <br></br> <p>Copyright © 2020 Cerbanimo, LLC.</p></Col>
                    <Col >
                        <p className="footerTitle">Platform</p>
                        <p><Link to="/whatFor">What's It For?</Link></p>
                        <p><Link to="/whatDo">What it Does</Link></p>
                    </Col>
                    <Col >
                        <p className="footerTitle">About</p>
                        <p><Link to="/vision">Our Vision</Link></p>
                        <p><Link to="/team">Our Team</Link></p>
                    </Col>
                    <Col>
                        <p className="footerTitle">Support</p>
                        <p><Link to="/faq">FAQ</Link></p>
                        <p><Link to="/contact">Contact</Link></p>
                        <p><Link to="/reset">Password Reset</Link></p>
                    </Col>
                    <Col>
                        <p className="footerTitle">Legal</p>
                        <p><Link to="/smartContracts">Smart Contracts</Link></p>
                        <p><Link to="/privacy">Privacy Policy</Link></p>
                        <p><Link to="/terms">Terms of use</Link></p>
                    </Col>
                </Row>
        </Navbar>
    )
}