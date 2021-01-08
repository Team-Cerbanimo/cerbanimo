import {useState, useEffect, React} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/surfacePages/home';
import Register from './pages/surfacePages/register';
import Login from './pages/surfacePages/login';
import Team from './pages/surfacePages/team';
import OuterNav from './components/outerNav';
import OuterFooter from './components/outerFooter';
import Description from './pages/surfacePages/description'
import './surfaceApp.css'
import description from './pages/surfacePages/descriptions.json'




function SurfaceApp() {
let propsObj = {}


  return (
    <HashRouter>

        <OuterNav />
      <div className="App">

        {/* Surface Pages */}
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/vision" render ={ () => { propsObj = description[0]; console.log(propsObj.title); return (<Description paragraph={propsObj.paragraph} title={propsObj.title}/>) }}/>
        <Route path="/team" component={Team} />
        <Route path="/whatFor" render ={ () => { propsObj = description[1]; console.log(propsObj.title); return (<Description paragraph={propsObj.paragraph} title={propsObj.title}/>) }}/>
        <Route path="/whatDo" render ={ () => { propsObj = description[2]; console.log(propsObj.title); return (<Description paragraph={propsObj.paragraph} title={propsObj.title}/>) }}/>

      </div>
      <OuterFooter/>
    </HashRouter>
  );
}

export default SurfaceApp;
