import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveCountries, removeCountryGuessed } from './../../actions';
import FlagCard from '../FlagCard/FlagCard';
import ResultsCard from './../../components/ResultsCard/ResultsCard';

export class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      points: 0,
      flagsGuessed: [],
      positions: [1, 2],
      correctClass: '',
      wrongClass: ''
    }
  }

  componentDidMount() {
    this.handleButtonClass()
  }

  handleButtonClass = () => {
    this.setState({correctClass: this.state.positions[Math.floor(Math.random() * this.state.positions.length)]})

    this.setState({wrongClass: this.state.correctClass === 1 ? 2 : 1})
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
   const { countries } = this.props

    return (
      <main>
        {countries.length !== 0 && <FlagCard handleGuess={this.handleGuess} flagsGuessed={this.state.flagsGuessed} correctClass={this.state.correctClass} wrongClass={this.state.wrongClass} />}
        {countries.length === 0 && <ResultsCard points={this.state.points} flagsGuessed={this.state.flagsGuessed} />}
        {countries.length !== 0 && 
          <Link to="/">
            <p>Start Over</p>
          </Link>
        }
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


