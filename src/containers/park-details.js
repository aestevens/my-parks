import React, { Component } from "react";
import { connect } from "react-redux";

class ParkDetails extends Component {
  addFavorites() {
    console.log("added to favorites");
  }

  removeFavorites() {
    console.log("removed from favorites");
  }

  render() {
    const id = this.props.match.params.id;
    const park = this.props.parks.find((park) => {
      return park.id === id;
    });

    return (
      <div>
        <div className="row">
          <div className="col-11">
            <div className="row justify-content-center">
              <h1>{park.fullName}</h1>
            </div>
            <div className="row justify-content-center">
              <h5>{park.designation}</h5>
            </div>
          </div>
          <div className="col-1">
            <i className='material-icons favorites' onClick={this.addFavorites}>favorite_border</i><i className='material-icons favorites hide' onClick={this.removeFavorites}>favorite</i>
          </div>
        </div>
        <hr/>
        <div className="row">
          <h3>Description</h3>
        </div>
        <div className="row">
          <p>{park.description}</p>
        </div>
        <hr/>
        <div className="row">
          <h3>Directions</h3>
        </div>
        <div className="row">
          <p>{park.directionsInfo}</p>
        </div>
        <hr/>
        <div className="row">
          <h3>Weather Information</h3>
        </div>
        <div className="row">
          <p>{park.weatherInfo}</p>
        </div>
        <hr/>
        <div className="row">
          <a href={park.url}>Learn more at National Parks Services website</a>
        </div>
      </div>
    )
  }
};

function mapStateToProps({parks}) {
  return { parks }
}

export default connect (mapStateToProps)(ParkDetails)
