import React from 'react';
import teamMembers from './teamMembers.json';
import TeamMember from '../../../components/teamMemeber';
import './team.css'

export default function Team(){
    let teamMates = teamMembers.map(member => {
        return <TeamMember 
                    id={member.id}
                    name={member.name}
                    img={member.img}
                    skills={member.skills}
                    title={member.title}
                    paragraph={member.paragraph}
                />
     })
    return(
        <div id="team">
           {teamMates} 
        </div>
    )
}