import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './views/Login';
import VysitorPortal from './views/VysitorPortal';
import TravellerDashboard from './views/TravellerDashboard';
import SetRoute from './views/VysitorPortal';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/vysitor-destinations' component={VysitorPortal} />
        <Route path='/traveller-dashboard' component={TravellerDashboard} />
        <Route path='/set-route' component={SetRoute} />
    </Switch>
    </BrowserRouter>

);

export default Routes
