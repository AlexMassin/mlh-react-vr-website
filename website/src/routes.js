import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './views/Login';
import VysitorPortal from './views/VysitorPortal';
import TravellerDashboard from './views/TravellerDashboard';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/vysitor-home' component={VysitorPortal} />
        <Route path='/traveller-dashboard' component={TravellerDashboard} />
    </Switch>
    </BrowserRouter>

);

export default Routes
