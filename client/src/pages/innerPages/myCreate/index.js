import { React, useEffect, useState } from 'react';
import { Button, Form, Row, Col, Container} from 'react-bootstrap';

export default function MyCreate() {
    let [type, setType] = useState("Project");
    let [skills, setSkills] = useState([]);
    let [tags, setTags] = useState([]);
    let [arrMap, setArrMap] = useState({ tags: [], skills: [] });

    //an object for the project or community that is being created
    //takes user inputs upon change & sumbission 
    let [createObj, setCreateObj] = useState({
        type: type,
        name: "",
        description: "",
        tags: tags,
        skills: skills,
        parent: ""
    })

    //removes a tag or skill from the appropriate State
    function set(arrType, cut) {
        if (arrType === tags) {
            setTags(arrType => arrType.filter((arrType, i) => i !== cut))
        }
        else if (arrType === skills) {
            setSkills(arrType => arrType.filter((arrType, i) => i !== cut));
        }
        else {
            console.log(arrType)
        }
    }

    //takes the array and a string representation of the array 
    //makes out the tags and skills on page
    function mapping(arrType, string) {
        let newMap = arrType.map(item => {
            return (
                <Col id={item + "col"}>{item}<i id={item} onClick={(e) => { let cut = arrType.indexOf(e.target.id); set(arrType, cut); }} className="far fa-times-circle"></i></Col>
            )
        })
        setArrMap({ ...arrMap, [string]: newMap })
    }

    //activates whenever tags state changes
    useEffect(() => {
        mapping(tags, "tags")
        setCreateObj({ ...createObj, tags: tags })
    }, [tags])

    //activates whenever skills state changes
    useEffect(() => {
        mapping(skills, "skills")
        setCreateObj({ ...createObj, skills: skills })
    }, [skills])

    //hook to listen for down Enter   
    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                updateArrays(event.target.id, event.target.value)
                //TODO NOT GETTING THESE VALUES SECOND TIME AROUND
            }
        };
        document.addEventListener("keydown", listener);
        // return () => {
        //     document.removeEventListener("keydown", listener);
        // };
    }, []);

    //is called after enter down
    function updateArrays(arrType, arrInput) {
        if (arrType === "tag") {
            //puts that tag into the tag state
            setTags(tags => [...tags, arrInput])
            //resets the input field
            document.getElementById("tag").value = ""
        }
        //repeated but for skill instead of tag
        else if (arrType === "skill") {
            setSkills(skills => [...skills, arrInput])
            document.getElementById("skill").value = ""
        }
    }

    //is called on intial two buttons
    //takes in string type sets it for the page and create obj
    function setProject(btnVal) {
        setType(btnVal)
        setCreateObj({
            ...createObj, type: btnVal
        })
    }

    async function formClick() {
        //TODO API route to Create Operation passing on createObj
        console.log(createObj);
        //resets the form
        let elementsArray = document.getElementsByClassName("form-control");
        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i].value = ""
        }

        await setSkills([]);
        await setTags([]);
        setCreateObj({
            type: type,
            name: "",
            description: "",
            tags: tags,
            skills: skills,
            parent: ""
        });

    }


    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h1>You're making a {type}!</h1>
                    <br></br>
                    <p>This is where the magic happens! If the above is blank make a selection below</p>
                </Col>
                
                <Col lg={12}>
                    <Button onClick={() => setProject("Project")}>Create Project</Button>
                    <Button onClick={() => setProject("Community")}>Create Community</Button>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col lg={12}>

                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => setCreateObj({ ...createObj, name: e.target.value })} type="name" placeholder={type + " Name"} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={(e) => setCreateObj({ ...createObj, description: e.target.value })} as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control id="tag" placeholder="#protectTheEnvironment #technology" />
                            <Row id="currentTags">{arrMap.tags}</Row>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Skills</Form.Label>
                            <Form.Control id="skill" placeholder="Design, Marketing, etc" />
                            <Row id="currentSkills">{arrMap.skills}</Row>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Parent</Form.Label>
                            <Form.Control onChange={(e) => setCreateObj({ ...createObj, parent: e.target.value })} placeholder={"Parent of " + type} />
                        </Form.Group>

                        <Button onClick={() => formClick()} variant="primary" type="button">
                            Create
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}