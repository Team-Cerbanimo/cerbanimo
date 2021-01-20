import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Profile from './pages/innerPages/profile';
import Home from './pages/innerPages/home';
import Projects from './pages/innerPages/projects';
import TaskMarket from './pages/innerPages/taskMarket';
import InnerNav from './components/innerNav';
import SurfaceApp from './surfaceApp';
import ReactDOM from 'react-dom';


function InnerApp() {
    return (
        <HashRouter>
            <InnerNav/>
            <div className="innerApp">
                innerApp
                <Route exact path="/" component={Home} />
                <Route path="/home" render={() => {
                    return (
                        <Home/>
                    )
                }} />
                <Route path="/profile" render={() => {
                    return (
                        <Profile/>
                    )
                }} />
                <Route path="/projects" render={() => {
                    return (
                        <Projects/>
                    )
                }} />
                <Route path="/task-market" render={() => {
                    return (
                        <TaskMarket/>
                    )
                }} />
                {/* <Route path="/log-out" render={() => {
                    return (
                        ReactDOM.render(
                            <React.StrictMode>
                              <SurfaceApp />
                            </React.StrictMode>,
                            document.getElementById('root')
                          )
                    )
                }} /> */}
            </div>
        </HashRouter>
    )
}
export default InnerApp;