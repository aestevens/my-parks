import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import HeaderSearchBar from '../containers/header-search-bar';
import ParkDetails from '../containers/park-details';
import ParkList from '../containers/park-list';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderSearchBar />
        <Switch>
          <Route exact path="/parks" component={ParkList} />
          <Redirect exact from="/" to="/parks" />
          <Route path="/parks/123" component={ParkDetails} />
        </Switch>
      </div>
    )
  }
}
