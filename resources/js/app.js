
require('./bootstrap');

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routers from './routes/App'
import {createStore} from 'redux'
import allReducers from "./store";

const store = createStore(allReducers);

render((
    <Provider store = {store}>
        <BrowserRouter>
                <Routers />
        </BrowserRouter>
    </Provider>
), document.getElementById('app'));