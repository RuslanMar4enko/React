import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Home from '../pages/Example'
import Xample from '../pages/Xample'


const Router = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/xample' component={Xample}/>
        </Switch>
    </div>
)

export default Router