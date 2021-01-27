import { React, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ProfileNav from '../../../components/innerComponents/profileNav';

export default function MyCreate() {
    let [type, setType] = useState("");
    let [skills, setSkills] = useState([]);
    let [tags, setTags] = useState([]);
    let [createObj, setCreateObj] = useState({
        type: type,
        name: "",
        description: "",
        tags: tags,
        skills: skills,
        parent: ""
    })

    let tagVSskill = ""
    let inputtagVSskill = ""
    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                setArrays(tagVSskill, inputtagVSskill)
            }
        };
        document.addEventListener("keydown", listener);
        // return () => {
        //     document.removeEventListener("keydown", listener);
        // };
    }, []);

    function setProject(btnVal) {
        setType(btnVal)
        setCreateObj({
            ...createObj, type: btnVal
        })
    }

    function formSubmit() {
        console.log(createObj);
        let elementsArray = document.getElementsByClassName("form-control");
        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i].value = ""
        }
    }

    function setArrays(tagVSskill, inputtagVSskill) {
        console.log(tagVSskill, inputtagVSskill)
        if (tagVSskill === "Tag") {
            tags.push(inputtagVSskill)
            console.log(tags)
            setCreateObj({
                ...createObj, tags: tags
            })
            tagVSskill = ""
            inputtagVSskill = ""
            document.getElementById("tag").value = ""
        }
        else if (tagVSskill === "Skill") {
            skills.push(inputtagVSskill)
            console.log(skills)
            setCreateObj({
                ...createObj, skills: skills
            })
            tagVSskill = ""
            inputtagVSskill = ""
            document.getElementById("skill").value = ""
        }
      

    }
    return (
        <div>
            <ProfileNav />
            <div>
                <h1>Your making a {type}!</h1>
                <p>This is where the magic happens! If the above is blank make a selection below</p>
                <Button onClick={() => setProject("Project")}>Create Project</Button>
                <Button onClick={() => setProject("Community")}>Create Community</Button>

            </div>
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
                    <Form.Control id="tag" onChange={(e) => { tagVSskill = "Tag"; inputtagVSskill = e.target.value; console.log(tagVSskill, inputtagVSskill) }} placeholder="#protectTheEnvironment #technology" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Skills</Form.Label>
                    <Form.Control id="skill" onChange={(e) => { tagVSskill = "Skill"; inputtagVSskill = e.target.value; console.log(tagVSskill, inputtagVSskill) }} placeholder="Design, Marketing, etc" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Parent</Form.Label>
                    <Form.Control onChange={(e) => setCreateObj({ ...createObj, parent: e.target.value })} placeholder={"Parent of " + type} />
                </Form.Group>

                <Button onClick={() => formSubmit()} variant="primary" type="button">
                    Create
                </Button>
            </Form>
        </div>
    )
}