import { useState, useEffect, React } from 'react';
import { Col, Row, Container, Carousel } from 'react-bootstrap';
import CommunityCard from '../../../components/innerComponents/communityCard'
import './profile.css';
export default function PublicProfile() {
    const props = {
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
            }, {
                name: "timerook",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            },
            {
                name: "stellar",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            },
            {
                name: "frustrate",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            },
            {
                name: "brown",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            },
            {
                name: "plague",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            },
            {
                name: "passion",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            }

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
                    interest={community.interest}
                />
            </Col>

        )
    });
    let skills = props.skills.map(skill =>{
        return (
            <div className='flex-skill'>
                <p>{skill.name}</p>
                <p>{skill.currentLevel}</p>
            </div>
        )
    })
const [stateRows, setRows] = useState([communities])
useEffect(()=>{
    console.log(communities.length);
    let rows = [];
    for (let i = 0; i < communities.length; i += 3) {
        console.log(i)
        rows.push(
            <Carousel.Item>
                <Row>
                    {communities[i]}
                    {communities[i + 1]}
                    {communities[i + 2]}
                </Row>
            </Carousel.Item>
        )
    };
    setRows(rows)
    console.log(stateRows);
}, [])

    return (
        <Container id="public-profile">
            <Row id="info-row" className="outer-rows">
          
                <Col className="top-row-col">
                    <Row id="img-row"><img src={props.img} alt="profile picture"></img></Row>
                    <Row><ul>{links}</ul></Row>
                </Col>
                <Col className="top-row-col">
                    <Row><h2>{props.name}</h2></Row>
                    <Row id="skill-box" > {skills}</Row>
                </Col>
               
            </Row>
            <Row className="outer-rows">
        
                <Col lg={10}>{props.description}</Col>

            </Row>
            <Row className="outer-rows">
          
                <Col id="skill-box" lg={10}></Col>
            
            </Row>
            <Row className="outer-rows">
                
                <Col lg={10}>
                    <Carousel>
                        {stateRows}
                    </Carousel>
                </Col>

            </Row>
        </Container>
    )
}