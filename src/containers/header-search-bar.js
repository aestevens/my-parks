import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchParks } from '../actions/fetch-parks'

class HeaderSearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = { stateCode: '' }
  }

  onDropdownChange = (event) => {
    this.setState( { stateCode: event.target.value })
  }

  onSearch = (event) => {
    event.preventDefault()
    console.log('Clicked search')
    // Make sure that the user has selected a state
    if (this.state.stateCode.length) {
      console.log('fetch parks with ' + this.state.stateCode)
      // Grab parks results and reset state so the user has to select
      this.props.fetchParks(this.state.stateCode)
      this.setState( { stateCode: '' })
    }
  }

  render() {
    return (
      <nav className='navbar fixed-top navbar-dark bg-dark'>
        <span className='navbar-brand'><i className='material-icons'>terrain</i> myParks</span>
        <form className='form-inline'>
          <select className ='form-control form-control-sm' name='state' id='state' onChange={this.onDropdownChange}>
            <option value=''>Select a State</option>
            <option value='AL'>Alabama</option>
            <option value='AK'>Alaska</option>
            <option value='AS'>American Samoa</option>
            <option value='AZ'>Arizona</option>
            <option value='AR'>Arkansas</option>
            <option value='CA'>California</option>
            <option value='CO'>Colorado</option>
            <option value='CT'>Connecticut</option>
            <option value='DE'>Delaware</option>
            <option value='DC'>District Of Columbia</option>
            <option value='FL'>Florida</option>
            <option value='GA'>Georgia</option>
            <option value='GU'>Guam</option>
            <option value='HI'>Hawaii</option>
            <option value='ID'>Idaho</option>
            <option value='IL'>Illinois</option>
            <option value='IN'>Indiana</option>
            <option value='IA'>Iowa</option>
            <option value='KS'>Kansas</option>
            <option value='KY'>Kentucky</option>
            <option value='LA'>Louisiana</option>
            <option value='ME'>Maine</option>
            <option value='MD'>Maryland</option>
            <option value='MA'>Massachusetts</option>
            <option value='MI'>Michigan</option>
            <option value='MN'>Minnesota</option>
            <option value='MS'>Mississippi</option>
            <option value='MO'>Missouri</option>
            <option value='MT'>Montana</option>
            <option value='NE'>Nebraska</option>
            <option value='NV'>Nevada</option>
            <option value='NH'>New Hampshire</option>
            <option value='NJ'>New Jersey</option>
            <option value='NM'>New Mexico</option>
            <option value='NY'>New York</option>
            <option value='NC'>North Carolina</option>
            <option value='ND'>North Dakota</option>
            <option value='MP'>Northern Mariana Islands</option>
            <option value='OH'>Ohio</option>
            <option value='OK'>Oklahoma</option>
            <option value='OR'>Oregon</option>
            <option value='PA'>Pennsylvania</option>
            <option value='PR'>Puerto Rico</option>
            <option value='RI'>Rhode Island</option>
            <option value='SC'>South Carolina</option>
            <option value='SD'>South Dakota</option>
            <option value='TN'>Tennessee</option>
            <option value='TX'>Texas</option>
            <option value='UT'>Utah</option>
            <option value='VT'>Vermont</option>
            <option value='VA'>Virginia</option>
            <option value='VI'>Virgin Islands</option>
            <option value='WA'>Washington</option>
            <option value='WV'>West Virginia</option>
            <option value='WI'>Wisconsin</option>
            <option value='WY'>Wyoming</option>
          </select>
          <button className='btn btn-outline-success btn-sm ml-1 my-2 my-sm-0' type='submit' onClick={this.onSearch}>Search</button>
        </form>
      </nav>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchParks }, dispatch)
}

export default connect(null, mapDispatchToProps)(HeaderSearchBar)
