import React from 'react';
import ReactDOM from 'react-dom';
import SurfaceApp from './surfaceApp';
import InnerApp from './innerApp'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//for now this variable is to represent whether 
//or not a user is actively logged in 
let authenticated = true
if(authenticated === false){
  ReactDOM.render(
    <React.StrictMode>
      <SurfaceApp />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
else{
  ReactDOM.render(
    <React.StrictMode>
      <InnerApp />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
