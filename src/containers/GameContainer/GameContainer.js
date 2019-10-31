import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      roundComplete: false
    }
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

export default GameContainer