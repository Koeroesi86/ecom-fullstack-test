import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import HomePage from '../views/HomePage';
import NotFound from '../views/notfound/NotFound';

export default (
    <Router history={hashHistory}>
        <Route exact path="/" component={HomePage}/>
        <Route path="*" exact={true} component={NotFound} />
    </Router>
);