import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ParkList extends Component {

  renderParks() {
    return this.props.parks.map( park => {
      return (
        <div className='col-12' key={park.id}>
          <Link to={`/parks/${park.id}`}>
            {park.fullName}
          </Link>
        </div>
      )
    })
  }

  render() {
    if (!this.props.parks) {
      return (
        <div><h1>Welcome to myParks!</h1></div>
      )
    }
    return (
      <div className='row justify-content-center'>
        {this.renderParks()}
      </div>
    )
  }


}

// function mapStateToProps({parks}) {
//   return
// }

export default connect ParkList
