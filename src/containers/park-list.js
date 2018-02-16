import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class ParkList extends Component {

  renderParks() {
    return this.props.parks.map( park => {
        return (
          <div className='row justify-content-center' key={park.id}>
            <div className='col-md-8 p-2'>
              <Link className='text-success' to={`/parks/${park.parkCode}`}>
                <p className='lead'>{this.props.parks.areParks ? park.fullName : park.name} ({park.designation})</p>
              </Link>
              <div>
                {_.truncate(park.description, {
                  'length': 240,
                  'separator': ' '
                })}
              </div>
            </div>
          </div>
        )
    })
  }

  render() {
    if (!this.props.parks) {
      return (
        <div className='row justify-content-center text-center'>
          <div className='col-12'>
            <h1 className='display-4 mt-5 mb-4'>Welcome to myParks!</h1>
          </div>
          <div className='col-12 mb-2'>
            <h6><i className='material-icons md-48' >local_florist</i></h6>
          </div>
          <div className='col-12'>
            <p className='lead'>Search for U.S. National Parks and campgrounds by state using the search above.</p>
            <p className='lead'>You can also save your favorite parks for viewing at another time. Happy exploring!</p>
          </div>
        </div>
      )
    }
    return (
      <div className='container'>
        {this.renderParks()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    parks: state.parks.parks,
    areParks: state.parks.areParks
  }
}

export default connect(mapStateToProps)(ParkList)
