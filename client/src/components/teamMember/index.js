import React from 'react';
import Paragraph from '../paragraph';

export default function TeamMember(props){
    return(
        <div class="teamMember" id={props.id}>
            <img src={props.img}></img>
           <header>{props.name}</header>
           <br></br>
           <Paragraph 
                title={props.title}
                paragraph={props.paragraph}/>
                      
        </div>
    )
}