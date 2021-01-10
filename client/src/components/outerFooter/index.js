import React from 'react';
import { Navbar, Row, Col, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './outerFooter.css';

export default function OuterFooter() {
    return (
        <Navbar sticky="bottom" id="outsideFooter">
            <Row>
                <Col lg={4}>Cerbanimo <br></br> <p>Copyright © 2020 Cerbanimo, LLC.</p></Col>
                <Col>
                {/* will need to convert this table into Cols for mobile responsiveness */}
                    <Table borderless  responsive="lg" id="footerTable">
                        <thead>
                            <tr>
                                <th>Platform</th>
                                <th>About</th>
                                <th>Support</th>
                                <th>Legal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to="/whatFor">What's It For?</Link></td>
                                <td><Link to="/vision">Our Vision</Link></td>
                                <td>FAQ</td>
                                <td>Smart Contracts</td>
                            </tr>
                            <tr>
                                <td><Link to="/whatDo">What it Does</Link></td>
                                <td><Link to="/team">Our Team</Link></td>
                                <td>Contact</td>
                                <td>Privacy Policy</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Password Reset</td>
                                <td>Terms of use</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Navbar>
    )
}