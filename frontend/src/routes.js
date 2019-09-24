import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import { Home } from './pages/Home';
import { BLogin } from './pages/Login';
import { BRegister } from './pages/Register';

export class ReactRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={BLogin} />
          <Route exact path="/register" component={BRegister} />
        </Switch>
      </BrowserRouter>
    );
  }
}
