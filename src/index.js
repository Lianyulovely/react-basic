import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

import getRoutes from "./routes";
import createStore from "./redux/create";
const store = createStore(hashHistory);
const history = syncHistoryWithStore(hashHistory, store);
/*syncHistoryWithStore 历史与store同步 Create an enhanced history that syncs navigation events with the store */


ReactDOM.render(
    <Provider store={store}>
            <Router history={history}>
                {getRoutes(store)}
            </Router>
    </Provider>,
    document.getElementById("root")
)
