import React from 'react';
import Paragraph from '../paragraph';

export default function TeamMember(props){
    let skills = props.skills.map(skill => {
       return <li>{skill.name} {skill.years}</li>
    })
 
    return(
        <div class="teamMember" id={props.id}>
            <img src={props.img}></img>
           <header>{props.name}</header>
           <br></br>
           <ul>
               {skills}
           </ul>
           <Paragraph 
                title={props.title}
                paragraph={props.paragraph}/>
                      
        </div>
    )
}