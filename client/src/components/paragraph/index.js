import React from 'react';

export default function paragraph(props){
    return(
        <div class="paragraph">
           <header>{props.title}</header>
           <br></br>
           <p>{props.paragrpah}</p>
        </div>
    )
}