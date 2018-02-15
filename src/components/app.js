import React, { Component } from 'react'

import HeaderSearchBar from '../containers/header-search-bar'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderSearchBar />
      </div>
    )
  }
}
