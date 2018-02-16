import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className='row justify-content-center text-center'>
        <div className='col-12'>
          <h1 className='display-4 mt-5 mb-4'>Welcome to myParks!</h1>
        </div>
        <div className='col-12 mb-2'>
          <h6><i className='material-icons' style={{fontSize:48 + 'px'}}>local_florist</i></h6>
        </div>
        <div className='col-12'>
          <p className='lead'>Search for U.S. National Parks and campgrounds by state using the search above.</p>
          <p className='lead'>You can also save your favorite parks for viewing at another time. Happy exploring!</p>
        </div>
      </div>
    )
  }
}
