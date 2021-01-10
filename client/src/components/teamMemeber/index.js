import React from 'react';
import Paragraph from '../paragraph';
import './teamMember.css'

export default function TeamMember(props){
    // let skills = props.skills.map(skill => {
    //    return <li>{skill.name}</li>
    // })
 
    return(
        <div class="teamMember" id={props.id}>
            <img className="headshots" src={props.img}></img>
            <br></br>
           <h2 className="names">{props.name}</h2>
           <br></br>
           {/* <h4>Works in:</h4>
           <ul className="skillList">
               {skills}
           </ul> */}
           <Paragraph 
                title={props.title}
                paragraph={props.paragraph}/>
                      
        </div>
    )
}