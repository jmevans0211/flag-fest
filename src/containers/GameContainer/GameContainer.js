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
      roundComplete: false
    }
  }

  // componentDidMount() {
  //   return this.generageFlagCard();
  // }
  
  generageFlagCard = () => {
    // const {countries} = this.props
    // return <FlagCard
    //   name = { countries[0].name }
    //   flag = { countries[0].flag }
    // />
    
    //get index 0 information
    //display on card
    //button press
    //calculate points
    //get out of array
    
  }
  
  
  render() {
    const { countries } = this.props
    console.log(countries[0], FlagCard)
    return (
      <main>
        <h1>container h1</h1>
          <h4><FlagCard /></h4>
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


