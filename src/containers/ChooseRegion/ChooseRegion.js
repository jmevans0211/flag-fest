import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchData } from './../../utils/apiCalls';
import { cleanCountryData } from './../../utils/helpers';
import { saveCountries } from '../../actions';
import './ChooseRegion.scss'

class ChooseRegion extends Component {
  constructor() {
    super();
    this.state = {
      region: '',
      tenLimit: false,
    }
  }

  handleRegion = (region) => {
    if (region === 'africa') {
      this.setState({ region: 'Africa' })
    } else if (region === 'europe') {
      this.setState({ region: 'Europe' })
    } else if (region === 'asia') {
      this.setState({ region: 'Asia' })
    } else if (region === 'americas') {
      this.setState({ region: 'America' })
    } else if (region === 'oceania') {
      this.setState({ region: 'Oceania'})
    }
  }

  handleFlagAmount = (amount) => {
    if (amount === 'ten') {
      this.setState({ tenLimit: true})
    } else if (amount === 'all') {
      this.setState({ tenLimit: false })
    }
  }

  filterCountries = async () => {
    const { saveCountries } = this.props

    try {
      // isLoading(true)
      const countries = await fetchData('https://restcountries.eu/rest/v2/all')
      const cleanCountriesData = cleanCountryData(countries)
      const regionalData = cleanCountriesData.filter(country => {
        return country.region === this.state.region
      }) 
      const randomCountries = this.randomizeCountries(regionalData)
      console.log('regionalData randomized-->', regionalData)
      // const tenCountries = this.limitCountries(randomCountries)
      // console.log('10 countries --->', tenCountries)
      saveCountries(randomCountries)
    } catch {
      // isLoading(false)
      //handleError()
    }


  } //<---end of filterCountries

  randomizeCountries = (countries) => {
    var i = countries.length, k , temp;
    while (--i > 0) {
       k = Math.floor(Math.random() * (i + 1));
       temp = countries[k];
       countries[k] = countries[i];
       countries[i] = temp;
    }
      return countries
  }

  limitCountries = (countries) => {
    if (this.state.tenLimit === true) {
      countries.spice(10)
    }
  }

  render() {
    console.log(this.state)
    return (
      <main>
        <h1>Choose a Region</h1>
        <img className="region" onClick={() => this.handleRegion('africa')} src="https://svgsilh.com/svg/151640.svg" />
        <img className="region" onClick={() => this.handleRegion('europe')} src="https://svgsilh.com/svg/151641.svg" />
        <img className="region" onClick={() => this.handleRegion('asia')} src="https://svgsilh.com/svg/307197.svg" />
        <img className="region" onClick={() => this.handleRegion('americas')} src="https://svgsilh.com/svg_v2/714733.svg" />
        <img className="region" onClick={() => this.handleRegion('oceania')} src="https://svgsilh.com/svg/23512.svg" />
        <div className="flag-amount-container">
          <h4>Choose How Many Flags You'd Like To Be Tested On</h4>
          <button type="button" onClick={() => this.handleFlagAmount('all')}>All Flags for this Region</button>
          <button type="button" onClick={() => this.handleFlagAmount('ten')}>Test me on 10 flags for this region</button>
        </div>
        <Link to='/flag-fest/play'>
          <h4 className="play-button" onClick={() => this.filterCountries()}>Play!</h4>
        </Link>
        <Link to=''>
          <h4 className="back-button">Back</h4>
        </Link>
      </main>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  saveCountries: countries => dispatch(saveCountries(countries))
})

export const mapStateToProps = state => ({
  countries: state.countries,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseRegion);
