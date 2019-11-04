import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from './../../utils/apiCalls';
import { cleanCountryData } from './../../utils/helpers';
import { saveCountries } from '../../actions';
import './ChooseRegion.scss'

export class ChooseRegion extends Component {
  constructor() {
    super();
    this.state = {
      region: '',
      activeRegion: '',
      tenLimit: false,
      activeAmount: '',
    }
  
  }

  handleRegion = (event, region) => {
    if (region === 'africa') {
      event.stopPropagation() 
      this.setState({ region: 'Africa', activeRegion: 'africa' })
    } else if (region === 'europe') {
      this.setState({ region: 'Europe', activeRegion: 'europe'  })
    } else if (region === 'asia') {
      event.stopPropagation() 
      this.setState({ region: 'Asia', activeRegion: 'asia'  })
    } else if (region === 'americas') {
      event.stopPropagation() 
      this.setState({ region: 'Americas', activeRegion: 'americas'  })
    } else if (region === 'oceania') {
      event.stopPropagation() 
      this.setState({ region: 'Oceania', activeRegion: 'oceania' })
    }
  }

  handleFlagAmount = (amount) => {
    if (amount === 'ten') {
      this.setState({ tenLimit: true, activeAmount: 'ten' })
    } else if (amount === 'all') {
      this.setState({ tenLimit: false, activeAmount: 'all' })
    }
  }

  filterCountries = async () => {
    const { saveCountries } = this.props

    try {
      const countries = await fetchData('https://restcountries.eu/rest/v2/all')
      const cleanCountriesData = await cleanCountryData(countries)
      const regionalData = await cleanCountriesData.filter(country => {
        return country.region === this.state.region
      }) 
      const randomCountries = await this.randomizeCountries(regionalData)
      if (this.state.tenLimit === true) {
        saveCountries(randomCountries.slice(0, 10))
        this.resetState()
      } else {
        saveCountries(randomCountries)
        this.resetState()
      }
    } catch(error) {
      console.log('error', error.message)
    }
  }

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

  resetState = () => {
    this.setState({region: '', activeRegion: '', tenLimit: false, activeAmount: ''})
  }

  render() {
    console.log(this.state)
    return (
      <>
        <main className="choose-region-main">
          <h1 className="choose-region-heading">Choose a Region</h1>
          <div className="region-button-container">
            <div className="region-img-p">
              <img className={this.state.activeRegion === 'africa' ? "region selected-region" : "region"} onClick={(event) => this.handleRegion(event, 'africa')} src="https://svgsilh.com/svg/151640.svg" alt="Silouetted image of Africa and button to select region" />
              <p>Africa</p>
            </div>
            <div className="region-img-p">
              <img className={this.state.activeRegion === 'europe' ? "region selected-region" : "region"}  onClick={(event) => this.handleRegion(event, 'europe')} src="https://svgsilh.com/svg/151641.svg" alt="Silouetted image of Europe and button to select region" />
              <p>Europe</p>
            </div>
            <div className="region-img-p">
              <img className={this.state.activeRegion === 'asia' ? "region selected-region" : "region"}  onClick={(event) => this.handleRegion(event, 'asia')} src="https://svgsilh.com/svg/307197.svg" alt="Silouetted image of Asia and button to select region" />
              <p>Asia</p>
            </div>
            <div className="region-img-p">
              <img className={this.state.activeRegion === 'americas' ? "region selected-region" : "region"}  onClick={(event) => this.handleRegion(event, 'americas')} src="https://svgsilh.com/svg_v2/714733.svg" alt="Silouetted image of the Americas and button to select region" />
              <p>Americas</p>
            </div>
            <div className="region-img-p">
              <img className={this.state.activeRegion === 'oceania' ? "region selected-region" : "region"}  onClick={(event) => this.handleRegion(event, 'oceania')} src="https://svgsilh.com/svg/23512.svg" alt="Silouetted image of Oceania and button to select region" />
              <p>Oceania</p>
            </div>
          </div>
          <div className="flag-amount-container">
            <h4 type="button" className={this.state.activeAmount === 'ten' ? "active-amount" : ""} onClick={() => this.handleFlagAmount('ten')} role="button">Test me on <span>ten</span> flags for this region</h4>
            <h4 type="button" className={this.state.activeAmount === 'all' ? "active-amount" : ""} onClick={() => this.handleFlagAmount('all')} role="button">Test Me On <span>All</span> Flags For This Region</h4>
          </div>
          <Link className="router-link" to='/flag-fest/play'>
            <h4 className="play-button" onClick={() => this.filterCountries()} role="button">Play!</h4>
          </Link>
        </main>
        <footer className="choose-region-footer">
          <Link className="router-link" to=''>
            <h4 className="back-button"> ⏎ Back</h4>
          </Link>
        </footer>
      </>
    )
  }
}

export const mapStateToProps = state => ({
  countries: state.countries,
});

export const mapDispatchToProps = dispatch => ({
  saveCountries: countries => dispatch(saveCountries(countries))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseRegion);

ChooseRegion.propTypes = {
  countries: PropTypes.array.isRequired,
  saveCountries: PropTypes.func.isRequired,
}
