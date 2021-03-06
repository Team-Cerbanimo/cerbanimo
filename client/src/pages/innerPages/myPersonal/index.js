import { React, useState, useEffect } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';

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
    let newDescription = profileObj.description
    let newEmail = profileObj.email
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
            <Container>
                <Row>
                    <Col>
                        <Row><img src={profileObj.img} alt="profile image"></img>    <i class="fas fa-pencil-alt"></i></Row>
                        <Row><ul id="currentProfileLinks">{links}</ul>   <i class="fas fa-pencil-alt"></i></Row>
                    </Col>
                    <Col>
                        <Row>
                            <h2>{profileObj.name}</h2>  
                        </Row>
                        <Row><p id="currentProfileEmail">{profileObj.email}</p> <i onClick={() => displayEdit("currentProfileEmail", "editProfileEmail")}class="fas fa-pencil-alt"></i>
                            <Form.Group id="editProfileEmail" style={{ display: "none" }}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control as="textarea" onChange={ (e) => newEmail = e.target.value }>{profileObj.email}</Form.Control>
                                <Button type="button" onClick={() => {setProfileObj({ ...profileObj, email: newEmail }); hideEdit("currentProfileEmail", "editProfileEmail") }}>Save</Button>
                            </Form.Group>
                        </Row>
                        <Row><p>**********</p>  <a href="#">reset passoword</a></Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div id="currentProfileDescription">{profileObj.description}</div>

                        <Form.Group id="editProfileDescription" style={{ display: "none" }} >
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={(e) => newDescription = e.target.value} as="textarea" rows={3}>
                                {profileObj.description}
                            </Form.Control>
                            <Button type="button" onClick={() => { setProfileObj({ ...profileObj, description: newDescription }); console.log(profileObj); hideEdit("currentProfileDescription", "editProfileDescription") }}>Save</Button>
                        </Form.Group>

                    </Col>
                    <i onClick={() => displayEdit("currentProfileDescription", "editProfileDescription")} class="fas fa-pencil-alt"></i>
                </Row>
            </Container>
        </div>
    )
}