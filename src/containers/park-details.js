import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPark } from '../actions/fetch-park';
import { bindActionCreators } from 'redux'

class ParkDetails extends Component {
  componentDidMount() {
    const { parkCode } = this.props.match.params;
    this.props.fetchPark(parkCode)
  }

  addFavorites() {
    console.log("added to favorites");
  }

  removeFavorites() {
    console.log("removed from favorites");
  }

  render() {
    const { currentPark } = this.props;

    if (!currentPark) {
      return <div>Loading...</div>
    }

    const isFavorite = () => this.props.favorites.some(favorite => favorite.id === currentPark.id)
    // console.log(isFavorite);

    return (
      <div>
        <div className="row">
          <div className="col-11">
            <div className="row justify-content-center">
              <h1>{currentPark.fullName}</h1>
            </div>
            <div className="row justify-content-center">
              <h5>{currentPark.designation}</h5>
            </div>
          </div>
          <div className="col-1">
            { !isFavorite ? <i className='material-icons favorites' onClick={this.addFavorites}>favorite_border</i> : <i className='material-icons favorites' onClick={this.removeFavorites}>favorite</i> }
          </div>
        </div>
        <hr/>
        <div className="row">
          <h3>Description</h3>
        </div>
        <div className="row">
          <p>{currentPark.description}</p>
        </div>
        <hr/>
        <div className="row">
          <h3>Directions</h3>
        </div>
        <div className="row">
          <p>{currentPark.directionsInfo}</p>
        </div>
        <hr/>
        <div className="row">
          <h3>Weather Information</h3>
        </div>
        <div className="row">
          <p>{currentPark.weatherInfo}</p>
        </div>
        <hr/>
        <div className="row">
          <a href={currentPark.url}>Learn more at National Parks Services website</a>
        </div>
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({fetchPark}, dispatch)
}

function mapStateToProps(state) {
  return {
    currentPark: state.parks.currentPark
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ParkDetails)
