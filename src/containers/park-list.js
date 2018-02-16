import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ParkList extends Component {

  renderParks() {
    return this.props.parks.map( park => {
      return (
        <div className='row justify-content-center' key={park.id}>
          <div className='col-md-4 col-sm-8 p-2'>
            <Link className='text-success' to={`/parks/${park.id}`}>
              {park.fullName}
            </Link>
          </div>
        </div>
      )
    })
  }

  render() {
    if (!this.props.parks.length) {
      return (
        <div className='row justify-content-center'>
          <h1 className='display-4 mt-5'>Welcome to myParks!</h1>

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

function mapStateToProps({parks}) {
  return { parks }
}

export default connect(mapStateToProps)(ParkList)
