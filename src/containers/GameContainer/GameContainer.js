import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      points: 0,
      roundComplete: false
    }
  }
  
  generageFlagCards = () => {
    
  }
  
  
  render() {
    const {countries} = this.props
    console.log('in render ==>>>', countries)
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


