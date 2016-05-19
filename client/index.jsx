import React                            from 'react';
import { render }                       from 'react-dom';
import { Router, browserHistory }       from 'react-router';
import routes                           from 'routes';

import { createStore, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import * as reducers                    from 'reducers';
import { fromJS }                       from 'immutable';

let initialState = window.__INITIAL_STATE__;

Object
    .keys(initialState)
    .forEach(key => {
        initialState[key] = fromJS(initialState[key]);
    });

const reducer = combineReducers(reducers);
const store   = createStore(reducer);

render(
    <Provider store={store}>
        <Router children={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('react-view')
);