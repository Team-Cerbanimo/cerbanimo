import React from 'react';
import { Row, Col, Table } from 'react-bootstrap'
import './outerFooter.css'

export default function OuterFooter(props) {
    return (
        <div id="outsideFooter">
            <Row>
                <Col lg={4}>Cerbanimo <br></br> <p>Copyright © 2020 Cerbanimo, LLC.</p></Col>
                <Col>
                    <Table borderless id="footerTable">
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
                                <td>What's if For</td>
                                <td>Our Vision</td>
                                <td>FAQ</td>
                                <td>Smart Contracts</td>
                            </tr>
                            <tr>
                                <td>What it Does</td>
                                <td>Our Team</td>
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
        </div>
    )
}