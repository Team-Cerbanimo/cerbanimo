import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/surfacePages/home';
import Register from './pages/surfacePages/register';
import Login from './pages/surfacePages/login';
import Vision from './pages/surfacePages/vision';
import Team from './pages/surfacePages/team';
import WhatDo from './pages/surfacePages/whatDo';
import WhatFor from './pages/surfacePages/whatFor';
import OuterNav from './components/outerNav';
import OuterFooter from './components/outerFooter';
import './surfaceApp.css'



function SurfaceApp() {
  return (
    <HashRouter>
        <OuterNav />
      <div className="App">

        {/* Surface Pages */}
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/vision" component={Vision} />
        <Route path="/team" component={Team} />
        <Route path="/whatFor" component={WhatFor} />
        <Route path="/whatDo" component={WhatDo} />

      </div>
        <OuterFooter/>
    </HashRouter>
  );
}

export default SurfaceApp;
