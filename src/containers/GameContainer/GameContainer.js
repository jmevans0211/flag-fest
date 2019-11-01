import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveCountries } from './../../actions';
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

  handleGuess = (e) => {
    this.addPoints(e)

  }

  addPoints = (e) => {
    e.preventDefault()
    this.setState({ points: this.state.points += 1})
  }
  
  
  render() {
    console.log(this.state.points)
    return (
      <main>
        <h1>container h1</h1>
          <h4><FlagCard handleGuess={this.handleGuess}/></h4>
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
  saveCountries: countries => dispatch(saveCountries(countries))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);


