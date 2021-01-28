import { React, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ProfileNav from '../../../components/innerComponents/profileNav';

export default function MyCreate() {
    let [type, setType] = useState("Project");
    let [skills, setSkills] = useState([]);
    let [tags, setTags] = useState([]);
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

  

 
    //hook to listen for down Enter
   
    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
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
            //puts that tag into the tag array
            tags.push(arrInput)
            //resets the input field
            document.getElementById("tag").value = ""
        }
        //repeated but for skill instead of tag
        else if (arrType === "skill") {
            skills.push(arrInput)
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

    function formClick() {
        //TODO API route to Create Operation passing on createObj
        console.log(createObj);
        //resets the form
        let elementsArray = document.getElementsByClassName("form-control");
        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i].value = ""
        }
    }
    return (
        <div>
            <div>
                <h1>You're making a {type}!</h1>
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
                    <Form.Control id="tag"  placeholder="#protectTheEnvironment #technology" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Skills</Form.Label>
                    <Form.Control id="skill" placeholder="Design, Marketing, etc" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Parent</Form.Label>
                    <Form.Control onChange={(e) => setCreateObj({ ...createObj, parent: e.target.value })} placeholder={"Parent of " + type} />
                </Form.Group>

                <Button onClick={() => formClick()} variant="primary" type="button">
                    Create
                </Button>
            </Form>
        </div>
    )
}