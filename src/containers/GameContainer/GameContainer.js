import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FlagCard from './../../components/FlagCard/FlagCard';

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      points: 0,
      roundComplete: false
    }
  }
  
  generageFlagCard = () => {
    const {countries} = this.props
    

    //get index 0 information
    //display on card
    //button press
    //calculate points
    //get out of array
    
  }
  
  
  render() {
    return (
      <main>
        <h1>in game container</h1>
        <Link to="/">
          <h4>Start Over</h4>
        </Link>

      </main>
    )
  }
}

export const mapStateToProps = state => ({
  countries: state.countries,
});

export default connect(mapStateToProps, null)(GameContainer);


