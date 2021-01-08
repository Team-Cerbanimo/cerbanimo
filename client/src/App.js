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

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../../config/middleware/isAuthenticated");

function App() {
  return (
    <HashRouter>
      <div className="App">
        <OuterNav />
        {/* Surface Pages */}
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/vision" component={Vision} />
        <Route path="/team" component={Team} />
        <Route path="/whatFor" component={WhatFor} />
        <Route path="/whatDo" component={WhatDo} />
        <OuterFooter/>
      </div>
    </HashRouter>
  );
}

export default App;
