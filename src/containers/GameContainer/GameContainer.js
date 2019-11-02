import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveCountries, removeCountryGuessed } from './../../actions';
import FlagCard from './../../components/FlagCard/FlagCard';

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      points: 0,
      flagsGuessed: [],
      roundComplete: false
    }
  }


  handleGuess = (answer) => {
    const { countries, removeCountryGuessed } = this.props
    if(answer === 'correct') {
      this.addPoints()
      this.setState({ flagsGuessed: [...this.state.flagsGuessed, countries[0]]})
      removeCountryGuessed();
    } else if (answer === 'incorrect') {
      this.setState({ flagsGuessed: [...this.state.flagsGuessed, countries[0]]})
      removeCountryGuessed();
    }
  }

  addPoints = () => {
    this.setState({ points: this.state.points += 1})
  }
  
  render() {
    console.log('points--->', this.state.points)
    console.log('flags guessed--->', this.state.flagsGuessed)
    return (
      <main>
          <FlagCard handleGuess={this.handleGuess}/>
        <Link to="/">
          <p>Start Over</p>
        </Link>

      </main>
    )
  }
}

export const mapStateToProps = state => ({
  countries: state.countries,
});

export const mapDispatchToProps = dispatch => ({
  saveCountries: countries => dispatch(saveCountries(countries)),
  removeCountryGuessed: () => dispatch(removeCountryGuessed())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);


