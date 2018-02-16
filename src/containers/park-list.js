import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { fetchParks } from '../actions/fetch-parks';

class ParkList extends Component {
  componentDidMount() {
    const { stateCode } = this.props.match.params;
    this.props.fetchParks(stateCode)
  }

  renderParks() {
    return this.props.parks.map( park => {
        return (
          <div className='row justify-content-center' key={park.id}>
            <div className='col-md-4 col-sm-8 p-2'>
              <Link className='text-success' to={`/parks/${park.parkCode}`}>
                <h5>{this.props.parks.areParks ? park.fullName : park.name}</h5>
              </Link>
            </div>
          </div>
        )
    })
  }

  render() {
    const { parks } = this.props;

    if (!parks) {
      return <div>Loading...</div>
    }

    return (
      <div className='container'>
        {this.renderParks()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchParks}, dispatch)
}

function mapStateToProps(state) {
  return {
    parks: state.parks.parks,
    areParks: state.parks.areParks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkList)
