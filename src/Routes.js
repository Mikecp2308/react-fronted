import React from 'react';
import Home from './core/home';
import Search from './core/Search';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () =>{
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/productById" exact component={Search}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
