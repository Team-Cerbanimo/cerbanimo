import React from 'react';
import { Form, Navbar, FormControl, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
export default function SearchBar() {
    return (
        <div>
            search bar
            <Navbar bg="light" expand="lg">


                <Form inline >
                    <Form.Check type="checkbox" default="checked" label="Projects"></Form.Check>
                    <Form.Check type="checkbox" label="Communities"></Form.Check>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
            <Form inline>
                <Form.Group>
                    <FormControl size="lg" type="text" placeholder="Search"></FormControl>
                    <ButtonGroup>
                        <Button size="lg">Search</Button>
                        <DropdownButton size="lg">
                            <Dropdown.Item><Form.Check type="checkbox" default="checked" label="Projects"></Form.Check></Dropdown.Item>
                            <Dropdown.Item><Form.Check type="checkbox" label="Communities"></Form.Check></Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </Form.Group>
            </Form>
        </div>
    )
}