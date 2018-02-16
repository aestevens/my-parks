import React, { Component } from "react";

export default class ParkDetails extends Component {
  addFavorites() {
    console.log("added to favorites");
  }

  removeFavorites() {
    console.log("removed from favorites");
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-11">
            <div className="row justify-content-center">
              <h1 className="fullName">Appalachian National Scenic Trail</h1>
            </div>
            <div className="row justify-content-center">
              <h5 className="designation">National Scenic Trail</h5>
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
          <p className="description">The Appalachian Trail is a 2,180+ mile long public footpath that traverses the scenic, wooded, pastoral, wild, and culturally resonant lands of the Appalachian Mountains. Conceived in 1921, built by private citizens, and completed in 1937, today the trail is managed by the National Park Service, US Forest Service, Appalachian Trail Conservancy, numerous state agencies and thousands of volunteers.</p>
        </div>
        <hr/>
        <div className="row">
          <h3>Directions</h3>
        </div>
        <div className="row">
          <p className="directionsInfo">There are many points of access along the Appalachian Trail, whether it is by car, train, bus or plane. For more detailed directions, please refer to the <a href='http://www.nps.gov/appa/planyourvisit/directions.htm'>"Directions"</a> section of our park webpage.</p>
        </div>
        <hr/>
        <div className="row">
          <h3>Weather Information</h3>
        </div>
        <div className="row">
          <p>It is your responsibility to be prepared for all weather conditions, including extreme and unexpected weather changes year-round. As the trail runs from Georgia to Maine there will be different weather conditions depending on your location. For weather along specific sections of the trail and at specific shelters, please refer to: <a href="http://www.atweather.org/">www.atweather.org/</a></p>
        </div>
        <hr/>
        <div className="row">
          <a href="https://www.nps.gov/appa/index.htm">Learn more at National Parks Services website</a>
        </div>
      </div>
    )
  }
};
