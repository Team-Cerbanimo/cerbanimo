import { React, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, Collapse } from 'react-bootstrap'

export default function ProjectPage() {
    // let timeline = props.dueDates.map(date, () => {
    //     <li>{date.month + "/" + date.day + "/" + date.year}</li>
    // })
    let props =
    {
        edit: true,
        name: "project 1",
        description: "Nulla culpa occaecat proident pariatur. Officia quis minim commodo fugiat. Incididunt eiusmod irure adipisicing nostrud ullamco nisi non ea anim sunt esse quis. Nostrud quis nisi do veniam exercitation est pariatur et fugiat consectetur laborum occaecat irure nisi.",
        skills: [
            {
                name: "Engineering",
                subSkills: ["testing", "teste2"]
            },
            {
                name: "Web Dev",
                subSkills: []
            },
            {
                name: "Marketing",

            },
            {
                name: "Finance",

            },
            {
                name: "Data",
                subSkills: []
            }]
    }
    let [projectState, setProjectState] = useState(props)
    let subSkills = ""
    let skills = ""
  
        skills = projectState.skills.map(skill => {
            <Col>
                <Row onClick={(e) => { subSkillsMap(e.target.value); displayContainer("#" + e.target.value + "SubSkill") }}>{skill.name}</Row>
                <Row id={skill.name + "SubSkill"} style={{ display: "none" }}>
                    <ul>
                        {subSkills}
                    </ul>
                </Row>
                <Row>
                    <Col>
                        <div id="editBtns" style={{ display: "none" }}>
                            <Button>Add Sub-Skill</Button>
                            <Button>Add Node</Button>
                        </div>
                    node view
                    </Col>
                </Row>
            </Col>
        })

    function subSkillsMap(skill) {
        let indexSkill = projectState.skills.name.indexOf(skill)
        subSkills = projectState.skills[indexSkill].subSkills.map(subSkill => {
            <li>{subSkill.name}</li>
        })
    }
    function displayContainer(Container) {
        document.getElementById(Container).style.display = "block";
    }
    function hideContainer(Container) {
        document.getElementById(Container).style.display = "none";
    }
    // useEffect(() =>{
    //     if (projectState.edit === true) {
    //         displayContainer("editBtns")
    //     }
    // })
    return (
        <Container>
            <Row><h1>{props.name}</h1> <Button onClick={() => { displayContainer("description") }}>Description</Button></Row>
            <Row id="description" style={{ display: "none" }}>{projectState.description} <br></br> <Button onClick={() => { hideContainer("description") }}>Close</Button></Row>
            <Row>
                <Col>
                    <ul>
                        {/* {timeline} */}
                    timeline
                    </ul>
                </Col>
                <Col lg={10}>
                    {skills}
                </Col>
            </Row>
        </Container>
    )
}