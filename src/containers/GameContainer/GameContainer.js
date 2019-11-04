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
      correctClass: 'positionA',
      wrongClass: 'positionB',
    }
  }

  componentDidMount() {
    this.handleButtonClass();
  }

  handleButtonClass = () => {
    let positions = [1, 2]
    let randomNumber = positions[Math.floor(Math.random() * positions.length)]

    if (randomNumber === 1) {
      this.setState({correctClass: 'positionA'})
      this.setState({wrongClass: 'positionB'})
    } else {
      this.setState({correctClass: 'positionB'})
      this.setState({wrongClass: 'positionA'})
    }
  }


  handleGuess = (answer) => {
    const { countries, removeCountryGuessed } = this.props
    if(answer === 'correct') {
      this.addPoints()
      this.setState({ flagsGuessed: [...this.state.flagsGuessed, countries[0]]})
      removeCountryGuessed();
      this.handleButtonClass()
    } else if (answer === 'incorrect') {
      this.setState({ flagsGuessed: [...this.state.flagsGuessed, countries[0]]})
      removeCountryGuessed();
      this.handleButtonClass();
    }
  }

  addPoints = () => {
    this.setState({ points: this.state.points += 1})
  }
  
  render() {
   const { countries } = this.props

    return (
      <main>
        {countries.length !== 0 && <FlagCard handleGuess={this.handleGuess} flagsGuessed={this.state.flagsGuessed} correctClass={this.state.correctClass} wrongClass={this.state.wrongClass} handleButtonClass={this.handleButtonClass}/>}
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


