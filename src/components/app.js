import React, { Component } from 'react'

import HeaderSearchBar from '../containers/header-search-bar'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderSearchBar />
        <Switch>
          <Route path="/parks" component={ParkList} />
          <Route path="/parks/:id" component={ParkDetails} />
        </Switch>
      </div>
    )
  }
}
