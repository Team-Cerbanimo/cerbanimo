import { HashRouter, Route } from 'react-router-dom';
import Profile from './pages/innerPages/profile'

function InnerApp() {
    return (
        <HashRouter>
            <div className="innerApp">
                innerApp
                <Route exact path="/" component={Profile} />
            </div>
        </HashRouter>
    )
}
export default InnerApp;