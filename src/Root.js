import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { HomePage } from './homePage/HomePage';
import { Contact } from './contact/Contact';
import { rootingURL } from './config/rootingURL';
import { Header } from './header/Header';
import  Portfolio  from './portfolio/Portfolio';

export const Root = function(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path={rootingURL.home} component={HomePage} exact/>
                <Route path={rootingURL.portfolio} component={Portfolio} exact/>
                <Route path={rootingURL.contact} component={Contact} exact/>
                <Redirect to={rootingURL.home}/>
            </Switch>
        </BrowserRouter>
    );
}