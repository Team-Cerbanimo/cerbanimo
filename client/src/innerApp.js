import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Profile from './pages/innerPages/profile';
import Home from './pages/innerPages/home';
import MyProjects from './pages/innerPages/myProjects';
import MyCreate from './pages/innerPages/myCreate';
import MyPersonal from './pages/innerPages/myPersonal';
import TaskMarket from './pages/innerPages/taskMarket';
import InnerNav from './components/innerComponents/innerNav';
import SurfaceApp from './surfaceApp';
import { render } from 'react-dom';


function InnerApp() {
    return (
        <HashRouter>
            <InnerNav/>
            <div className="innerApp">
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
                <Route path="/my-projects" render={() => {
                    return (
                        <MyProjects/>
                    )
                }} />
                <Route path="/personal" render={() => {
                    return (
                        <MyPersonal/>
                    )
                }} />
                <Route path="/create" render={() => {
                    return (
                        <MyCreate/>
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