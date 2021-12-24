import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Dashboard from './pages/innerPages/dashboard';
import MyProjects from './pages/innerPages/myProjects';
import MyCreate from './pages/innerPages/myCreate';
import MyPersonal from './pages/innerPages/myPersonal';
import TaskMarket from './pages/innerPages/taskMarket';
import InnerNav from './components/innerComponents/innerNav';
import PublicProfile from './pages/innerPages/publicProfile';

function InnerApp() {
    return (
        <HashRouter>
            <InnerNav/>
            <div className="innerApp">
                <Route exact path="/" component={Dashboard} />
                <Route path="/dashboard" render={() => {
                    return (
                        <Dashboard/>
                    )
                }} />
                <Route path="/profile" render={() => {
                    return (
                        <PublicProfile/>
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
                 {/* <Route path="/:username" render={() => {
                    return (
                        <PublicProfile/>
                    )
                }} /> */}
            </div>
        </HashRouter>
    )
}
export default InnerApp;