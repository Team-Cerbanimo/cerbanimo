import { React, useState, useEffect } from 'react';
import ProfileNav from '../../../components/innerComponents/profileNav';
import { Col, Row, Container, Form, Button } from 'react-bootstrap'

export default function MyPersonal() {
    let props = {
        name: "AndyDragon",
        email: "dragonsetmbrite@gmail.com",
        description: "Minim ea et est adipisicing officia qui cupidatat deserunt commodo. Magna mollit officia est duis et commodo amet enim nostrud voluptate dolor ut dolore nisi. Ut veniam sit ipsum elit id. Fugiat mollit ipsum occaecat magna anim reprehenderit magna ut eu consequat Lorem sunt nisi. Sint quis quis et amet eiusmod tempor anim.",
        img: "https://avatars2.githubusercontent.com/u/64037800?s=400&u=53ec1db932c81fd5b8b01fe87dfa7f3fa53161d4&v=4",
        links: [
            {
                url: "https://github.com/AnthonyStembreit",
                name: "Github"
            },
            {
                url: "https://www.linkedin.com/in/anthony-stembreit/",
                name: "LinkedIn"
            }
        ]
    }
    let [profileObj, setProfileObj] = useState(props)
    let links = profileObj.links.map(link => {
        return (
            <li><a href={link.url}>{link.name}</a></li>
        )
    })
    let newDescription = ""

    function displayEdit(displayContainer, editContainer) {
        document.getElementById(displayContainer).style.display = "none";
        document.getElementById(editContainer).style.display = "block";
    }
    function hideEdit(displayContainer, editContainer) {
        document.getElementById(displayContainer).style.display = "block";
        document.getElementById(editContainer).style.display = "none";
    }
    return (
        <div>
            <ProfileNav />
            <Container>
                <Row>
                    <Col>
                        <Row><img src={profileObj.img} alt="profile image"></img>    <i class="fas fa-pencil-alt"></i></Row>
                        <Row><ul>{links}</ul>   <i class="fas fa-pencil-alt"></i></Row>
                    </Col>
                    <Col>
                        <Row><h2>{profileObj.name}</h2>  <i class="fas fa-pencil-alt"></i></Row>
                        <Row>{profileObj.email}  <i class="fas fa-pencil-alt"></i></Row>
                        <Row>**********  <i class="fas fa-pencil-alt"></i></Row>
                    </Col>
                </Row>
                <Row>
                    <Col><div id="currentProfileDescription">{profileObj.description}</div>
                        <div id="editProfileDescription" style={{ display: "none" }}>
                            <Form.Group >
                                <Form.Label>Description</Form.Label>
                                <Form.Control onChange={(e) => newDescription = e.target.value} as="textarea" rows={3}>
                                    {profileObj.description}
                                </Form.Control>
                                <Button type="button" onClick={() => { setProfileObj({ ...profileObj, description: newDescription }); hideEdit("currentProfileDescription", "editProfileDescription") }}>Save</Button>
                            </Form.Group>
                        </div>
                    </Col><i onClick={() => displayEdit("currentProfileDescription", "editProfileDescription")} class="fas fa-pencil-alt"></i>
                </Row>
            </Container>
        </div>
    )
}