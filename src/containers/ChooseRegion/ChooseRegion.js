import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from './../../utils/apiCalls';
import { cleanCountryData } from './../../utils/helpers';
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
    // const { prop } = this.props

    try {
      // isLoading(true)
      const countries = await fetchData('https://restcountries.eu/rest/v2/all')
      const cleanCountriesData = cleanCountryData(countries)
      const regionalData = cleanCountriesData.filter(country => {
        return country.region === this.state.region
      })
      console.log(regionalData)
    } catch {
      // isLoading(false)
    }
    


    // async componentDidMount() {
    //   const { getMovies, handleError, isLoading } = this.props
  
    //   try {
    //     isLoading(true)
    //     const movies = await fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56')
    //     const cleanMovies = filteredMovieData(movies.results)
    //     isLoading(false)
    //     getMovies(cleanMovies)
    //   } catch {
    //     isLoading(false)
    //     handleError('There was an error getting your movies!')
    //   }
    // }


  } //<---end of filterCountries

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

export default ChooseRegion;