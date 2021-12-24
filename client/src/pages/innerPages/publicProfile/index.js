import React from 'react';
import { Col, Row, Container, Carousel } from 'react-bootstrap';
import CommunityCard from '../../../components/innerComponents/communityCard'

export default function PublicProfile() {
    let props = {
        name: "AndyDragon",
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
        ],
        skills: [
            {
                name: "Skill",
                currentLevel: 4,
                subSkills: [
                    {
                        name: "sub Skill",
                        currentLevel: 2,
                    }
                ]
            },
            {
                name: "Skill two ",
                currentLevel: 3,
                subSkills: [
                    {
                        name: "sub Skill",
                        currentLevel: 4,
                    }
                ]
            }
        ],
        communities: [
            {
                name: "stars",
                description: "lorMollit est sint id sit esse duis.",
                interest: "25%"
            },
            {
                name: "bright",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            },

        ]
    }
    let links = props.links.map(link => {
        return (
            <li><a href={link.url}>{link.name}</a></li>
        )
    })

    let communities = props.communities.map(community => {
        return (
           
                    <Col>
                        <CommunityCard
                            name={community.name}
                            description={community.description}
                            page="public"
                        />
                        <h4>{community.interest}</h4>
                    </Col>

        )
    })
    console.log(communities)
    const mapRows = () => {
        let numRow = Math.floor(communities.length / 3);
        console.log(numRow)
        let rows = []
        for (let i = 0; i < numRow; i+3) {
            rows.push(
                <Carousel.Item>
                    <Row>
                        {communities[i]}
                        {communities[i+1]}
                        {communities[i+2]}
                    </Row>
                </Carousel.Item>
            )
        };
        console.log(rows)
        return rows
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Row><img src={props.img} alt="profile picture"></img></Row>
                    <Row><ul>{links}</ul></Row>
                </Col>
                <Col>
                    <Row><h2>{props.name}</h2></Row>
                    <Row>{props.skills[0].name}   {props.skills[0].currentLevel}</Row>
                    <Row>{props.skills[1].name}   {props.skills[1].currentLevel}</Row>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col lg={10}>{props.description}</Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col lg={10}>
                    skill component
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col lg={10}>
                    <Carousel>
                        {mapRows()}
                    </Carousel>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}