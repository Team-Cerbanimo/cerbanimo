import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ProfileNav from '../../../components/innerComponents/profileNav';

export default function MyCreate() {
    let type = ""
    return (
        <div>
            <ProfileNav />
            <div>
                <Button onClick={type="Project"}>Create Project</Button>
                <Button onClick={type="Community"}>Create Community</Button>
            </div>
            <Form>

                <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder={type + " Name"} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tags</Form.Label>
                    <Form.Control placeholder="#protectTheEnvironment #technology" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Skills</Form.Label>
                    <Form.Control placeholder="Design, Marketing, etc" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Parent</Form.Label>
                    <Form.Control placeholder={ "Parent " + type} />
                </Form.Group>

                    <Button variant="primary" type="submit">
                        Create
                    </Button>
            </Form>
        </div>
    )
}