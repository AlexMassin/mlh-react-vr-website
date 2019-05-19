import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './views/Login';
import VysitorPortal from './views/VysitorPortal';
import SetRoute from './views/SetRoute';
import TravelerDashboard from './views/TravelerDashboard';
import CameraSetup from './views/CameraSetup';
import FindTraveler from './views/FindTraveler';


const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/vysitor-destinations' component={VysitorPortal} />
        <Route path='/set-route' component={SetRoute}/>
        <Route path='/traveler-dashboard' component={TravelerDashboard} />
        <Route path='/camera-setup' component={CameraSetup} />
        <Route path='/find' component={FindTraveler} />
    </Switch>
    </BrowserRouter>

);

export default Routes
