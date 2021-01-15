import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Paragraph from '../../../components/paragraph';

export default function Description(props) {
    return (
        <Row>
            <Col></Col>
            <Col lg={9}>
                <Paragraph
                    title={props.title}
                    paragraph={props.paragraph} />
            </Col>
            <Col ></Col>
        </Row >
    )
}