import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { HomePage } from './homePage/HomePage';
import { Contact } from './contact/Contact';
import { rootingURL } from './config/rootingURL';
import { Header } from './header/Header';

export const Root = function(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path={rootingURL.home} component={HomePage} exact/>
                <Route path={rootingURL.contact} component={Contact} exact/>
                <Redirect to={rootingURL.home}/>
            </Switch>
        </BrowserRouter>
    );
}