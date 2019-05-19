import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './views/Login';
import VysitorPortal from './views/VysitorPortal';
import TravelerDashboard from './views/TravelerDashboard';
import CameraSetup from './views/CameraSetup';
const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/vysitor-destinations' component={VysitorPortal} />
        <Route path='/traveler-dashboard' component={TravelerDashboard} />
        <Route path='/camera-setup' component={CameraSetup} />
    </Switch>
    </BrowserRouter>

);

export default Routes
