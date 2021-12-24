import React from 'react';
import './pageTitle.css';

export default function PageTitle(props){
    console.log(props)
    return(
        <div className="pageTitle">
           {props.name}
        </div>
    )
}