import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
import NoMatch from './components/common/NoMatch';
import DummyMatch from './components/common/DummyMatch';

import Dashboard from './components/dashboard/Dashboard';
import LatestBills from './components/bill/LatestBills';

export default (
    <Route path="/" component={App}>
        <Route component={Dashboard}>
            <IndexRoute component={LatestBills}/>
        </Route>
        <Route path="nomatch" component={NoMatch}/>
        <Route path="dummymatch" component={DummyMatch}/>
    </Route>
);
