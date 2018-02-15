import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import HeaderSearchBar from '../containers/header-search-bar';
import ParkDetails from '../containers/park-details';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderSearchBar />
        <Switch>
          <Route path="/" component={ParkDetails} />
        </Switch>
      </div>
    )
  }
}
