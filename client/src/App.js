import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Vision from './pages/vision';
import Team from './pages/team';
import WhatDo from './pages/whatDo';
import WhatFor from './pages/whatFor';
import OuterNav from './components/outerNav';

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../../config/middleware/isAuthenticated");

function App() {
  return (
    <HashRouter>
      <div className="App">
        <OuterNav />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/vision" component={Vision} />
        <Route path="/team" component={Team} />
        <Route path="/whatFor" component={WhatFor} />
        <Route path="/whatDo" component={WhatDo} />
      </div>
    </HashRouter>
  );
}

export default App;
